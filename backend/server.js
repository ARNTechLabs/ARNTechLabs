const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('./database/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

// ============================================
// REGISTER ROUTE
// ============================================
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone, qualification, interestedCourse } = req.body;

    // Validation
    if (!name || !email || !password || !phone || !qualification || !interestedCourse) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Password validation
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({ message: 'Phone number must be 10 digits' });
    }

    // Check if user exists
    const [existingUsers] = await db.query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, phone, qualification, interested_course) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, hashedPassword, phone, qualification, interestedCourse]
    );

    const userId = result.insertId;

    // Generate token
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Registration successful',
      user: {
        id: userId,
        name,
        email,
        phone,
        qualification,
        interestedCourse
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

// ============================================
// SIGN IN ROUTE
// ============================================
app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user
    const [users] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = users[0];

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Sign in successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        qualification: user.qualification,
        interestedCourse: user.interested_course
      },
      token
    });
  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).json({ message: 'Sign in failed. Please try again.' });
  }
});

// ============================================
// AUTH MIDDLEWARE
// ============================================
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const [users] = await db.query(
      'SELECT id, name, email, phone, qualification, interested_course FROM users WHERE id = ?',
      [decoded.userId]
    );
    
    if (users.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = users[0];
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// ============================================
// GET CURRENT USER (PROTECTED ROUTE)
// ============================================
app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone,
      qualification: req.user.qualification,
      interestedCourse: req.user.interested_course
    }
  });
});

// ============================================
// GET ALL USERS (ADMIN ROUTE - OPTIONAL)
// ============================================
app.get('/api/users', authMiddleware, async (req, res) => {
  try {
    const [users] = await db.query(
      'SELECT id, name, email, phone, qualification, interested_course, created_at FROM users ORDER BY created_at DESC'
    );
    
    res.json({
      users,
      count: users.length
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

// ============================================
// UPDATE USER PROFILE (PROTECTED)
// ============================================
app.put('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const { name, phone, qualification, interestedCourse } = req.body;
    const userId = req.user.id;

    // Validation
    if (!name || !phone || !qualification || !interestedCourse) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Update user
    await db.query(
      'UPDATE users SET name = ?, phone = ?, qualification = ?, interested_course = ? WHERE id = ?',
      [name, phone, qualification, interestedCourse, userId]
    );

    // Get updated user
    const [users] = await db.query(
      'SELECT id, name, email, phone, qualification, interested_course FROM users WHERE id = ?',
      [userId]
    );

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: users[0].id,
        name: users[0].name,
        email: users[0].email,
        phone: users[0].phone,
        qualification: users[0].qualification,
        interestedCourse: users[0].interested_course
      }
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// ============================================
// DELETE USER ACCOUNT (PROTECTED)
// ============================================
app.delete('/api/auth/account', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    await db.query('DELETE FROM users WHERE id = ?', [userId]);

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Account deletion error:', error);
    res.status(500).json({ message: 'Failed to delete account' });
  }
});

// ============================================
// HEALTH CHECK
// ============================================
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// ============================================
// ERROR HANDLER
// ============================================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ============================================
// START SERVER
// ============================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add this after your existing routes

// ============================================
// SUBMIT FEEDBACK
// ============================================
app.post('/api/feedback/submit', async (req, res) => {
  try {
    const { name, email, course, rating, feedback, wouldRecommend } = req.body;

    // Validation
    if (!name || !email || !course || !rating || !feedback) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Rating validation
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Insert feedback
    const [result] = await db.query(
      'INSERT INTO feedback (name, email, course, rating, feedback, would_recommend) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, course, rating, feedback, wouldRecommend]
    );

    res.status(201).json({
      message: 'Feedback submitted successfully',
      feedbackId: result.insertId
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({ message: 'Failed to submit feedback. Please try again.' });
  }
});

// ============================================
// GET ALL FEEDBACK (ADMIN)
// ============================================
app.get('/api/feedback/all', authMiddleware, async (req, res) => {
  try {
    const [feedback] = await db.query(
      'SELECT id, name, email, course, rating, feedback, would_recommend, created_at FROM feedback ORDER BY created_at DESC'
    );

    res.json({
      feedback,
      count: feedback.length
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
});

// ============================================
// GET FEEDBACK BY COURSE
// ============================================
app.get('/api/feedback/course/:course', async (req, res) => {
  try {
    const { course } = req.params;

    const [feedback] = await db.query(
      'SELECT id, name, course, rating, feedback, would_recommend, created_at FROM feedback WHERE course = ? ORDER BY created_at DESC',
      [course]
    );

    res.json({
      course,
      feedback,
      count: feedback.length,
      averageRating: feedback.length > 0 
        ? (feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length).toFixed(1)
        : 0
    });
  } catch (error) {
    console.error('Error fetching course feedback:', error);
    res.status(500).json({ message: 'Failed to fetch course feedback' });
  }
});

// ============================================
// GET FEEDBACK STATISTICS
// ============================================
app.get('/api/feedback/stats', async (req, res) => {
  try {
    const [stats] = await db.query(`
      SELECT 
        COUNT(*) as total_feedback,
        AVG(rating) as average_rating,
        SUM(CASE WHEN would_recommend = 1 THEN 1 ELSE 0 END) as would_recommend_count,
        COUNT(DISTINCT course) as courses_with_feedback
      FROM feedback
    `);

    const [ratingDistribution] = await db.query(`
      SELECT 
        rating,
        COUNT(*) as count
      FROM feedback
      GROUP BY rating
      ORDER BY rating DESC
    `);

    res.json({
      statistics: stats[0],
      ratingDistribution
    });
  } catch (error) {
    console.error('Error fetching feedback stats:', error);
    res.status(500).json({ message: 'Failed to fetch feedback statistics' });
  }
});

// ============================================
// DELETE FEEDBACK (ADMIN)
// ============================================
app.delete('/api/feedback/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    await db.query('DELETE FROM feedback WHERE id = ?', [id]);

    res.json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    console.error('Feedback deletion error:', error);
    res.status(500).json({ message: 'Failed to delete feedback' });
  }
});