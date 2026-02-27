import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    interestedCourse: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const qualifications = [
    { value: '', label: 'Select your highest education' },
    { value: '10th', label: '10th Standard' },
    { value: '12th', label: '12th Standard' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'undergraduate', label: 'Undergraduate (pursuing/completed)' },
    { value: 'graduate', label: 'Graduate (Bachelor\'s Degree)' },
    { value: 'postgraduate', label: 'Postgraduate (Master\'s Degree)' },
    { value: 'phd', label: 'PhD / Doctorate' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Mobile number must be 10 digits';
    }
    
    if (!formData.qualification) {
      newErrors.qualification = 'Please select your qualification';
    }
    
    if (!formData.interestedCourse.trim()) {
      newErrors.interestedCourse = 'Interested course is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setApiError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          qualification: formData.qualification,
          interestedCourse: formData.interestedCourse,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      login(data.user, data.token);
      navigate('/');
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card register-card">
          <div className="auth-header">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join thousands of students transforming their careers</p>
          </div>

          {apiError && (
            <div className="alert alert-error">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="1234567890"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            {/* Qualification */}
            <div className="form-group">
              <label htmlFor="qualification" className="form-label">Qualification / Highest Education</label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={`form-input form-select ${errors.qualification ? 'error' : ''}`}
              >
                {qualifications.map((qual) => (
                  <option key={qual.value} value={qual.value}>
                    {qual.label}
                  </option>
                ))}
              </select>
              {errors.qualification && <span className="error-message">{errors.qualification}</span>}
            </div>

            {/* Interested Course */}
            <div className="form-group">
              <label htmlFor="interestedCourse" className="form-label">Interested Course</label>
              <input
                type="text"
                id="interestedCourse"
                name="interestedCourse"
                value={formData.interestedCourse}
                onChange={handleChange}
                className={`form-input ${errors.interestedCourse ? 'error' : ''}`}
                placeholder="e.g., Full Stack Development, Data Science, UI/UX Design"
              />
              {errors.interestedCourse && <span className="error-message">{errors.interestedCourse}</span>}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Minimum 6 characters"
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            {/* Terms and Conditions */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="auth-link">Terms & Conditions</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="auth-link">Privacy Policy</Link>
                </span>
              </label>
              {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
            </div>

            <button
              type="submit"
              className="auth-btn"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <p className="auth-switch">
            Already have an account?{' '}
            <Link to="/signin" className="auth-link">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;