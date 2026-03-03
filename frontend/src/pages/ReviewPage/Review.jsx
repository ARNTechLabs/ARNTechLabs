// import React, { useState, useEffect } from 'react';
// import { reviews } from '../../data/reviews_data';
// import { Link } from 'react-router-dom';
// import './Review.css';

// const Review = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(prev => (prev + 1) % reviews.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [reviews.length]);

//   const prev = () => setCurrent(p => (p - 1 + reviews.length) % reviews.length);
//   const next = () => setCurrent(p => (p + 1) % reviews.length);

//   return (
//     <div className="review-page">

//       {/* Hero */}
//       <section className="rv-hero">
//         <p className="rv-eyebrow">WHAT STUDENTS SAY</p>
//         <h1 className="rv-title">Real results.<br /><span>Real stories.</span></h1>
//         <p className="rv-sub">Hear directly from students who transformed their careers with ARN TachLabs.</p>
//       </section>

//       {/* Slider */}
//       <section className="rv-slider-section">
//         <div className="rv-slider-wrap">

//           {/* Prev */}
//           <button className="rv-arrow rv-prev" onClick={prev} aria-label="Previous">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>

//           {/* Track */}
//           <div className="rv-slider">
//             <div
//               className="rv-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {reviews.map(r => (
//                 <div key={r.id} className="rv-card">
//                   <div className="rv-quote">"</div>
//                   <p className="rv-text">{r.text}</p>
//                   <div className="rv-footer">
//                     <div className="rv-avatar">
//                       <img src={r.image} alt={r.name} className="avatar-image" />
//                     </div>
//                     <div className="rv-info">
//                       <p className="rv-name">{r.name}</p>
//                       <p className="rv-course">{r.course}</p>
//                       <div className="rv-stars">
//                         {[...Array(r.rating)].map((_, i) => <span key={i}>★</span>)}
//                       </div>
//                     </div>
//                     <p className="rv-date">{r.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Next */}
//           <button className="rv-arrow rv-next" onClick={next} aria-label="Next">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>

//         </div>

//         {/* Dots */}
//         <div className="rv-dots">
//           {reviews.map((_, i) => (
//             <button
//               key={i}
//               className={`rv-dot ${i === current ? 'active' : ''}`}
//               onClick={() => setCurrent(i)}
//               aria-label={`Review ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* Counter */}
//         <p className="rv-counter">{current + 1} / {reviews.length}</p>
//       </section>

//       {/* Stats */}
//       <section className="rv-stats">
//         <div className="rv-stat">
//           <strong>1,000+</strong>
//           <span>Happy Students</span>
//         </div>
//         <div className="rv-stat">
//           <strong>95%</strong>
//           <span>Placement Rate</span>
//         </div>
//         <div className="rv-stat">
//           <strong>4.9 / 5</strong>
//           <span>Average Rating</span>
//         </div>
//         <div className="rv-stat">
//           <strong>50+</strong>
//           <span>Partner Companies</span>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="rv-cta">
//         <h2>Ready to start your journey?</h2>
//         <p>Join thousands of students who transformed their careers with us.</p>
//         <Link to='/programs'><button className="rv-cta-btn">Apply Now →</button></Link>
//       </section>

//     </div>
//   );
// };

// export default Review;


import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: 5,
    feedback: '',
    wouldRecommend: true
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const courses = [
    'Full Stack Development',
    'Data Science & AI',
    'UI/UX Design',
    'Mobile Development',
    'Cybersecurity',
    'Cloud & DevOps'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email || !formData.course || !formData.feedback.trim()) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/feedback/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit feedback');
      }

      setMessage({ type: 'success', text: 'Thank you for your feedback! We appreciate your time.' });

      // Reset form
      setFormData({
        name: '',
        email: '',
        course: '',
        rating: 5,
        feedback: '',
        wouldRecommend: true
      });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-page">
      {/* Hero Section */}
      <section className="review-hero">
        <div className="review-hero-content">
          <p className="review-eyebrow">STUDENT FEEDBACK</p>
          <h1 className="review-hero-title">
            Share Your <span className="review-accent">Experience</span>
          </h1>
          <p className="review-hero-subtitle">
            Your feedback helps us improve and helps future students make informed decisions.
            We value your honest opinion.
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="feedback-form-section">
        <div className="feedback-container">
          <div className="feedback-card">
            <div className="feedback-header">

              <h2 className="feedback-title">Submit Your Feedback</h2>
              <p className="feedback-subtitle">All fields marked with * are required</p>
            </div>

            {message.text && (
              <div className={`feedback-message ${message.type}`}>
                <span className="material-icons-round">
                  {message.type === 'success' ? 'check_circle' : 'error'}
                </span>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="feedback-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Course */}
              <div className="form-group">
                <label htmlFor="course" className="form-label">
                  Course Enrolled <span className="required">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select your course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div className="form-group">
                <label htmlFor="rating" className="form-label">
                  Overall Rating <span className="required">*</span>
                </label>
                <div className="rating-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${star <= formData.rating ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    >
                      <span className="material-icons-round">
                        {star <= formData.rating ? 'star' : 'star_outline'}
                      </span>
                    </button>
                  ))}
                  <span className="rating-text">{formData.rating} / 5</span>
                </div>
              </div>

              {/* Feedback */}
              <div className="form-group">
                <label htmlFor="feedback" className="form-label">
                  Your Feedback <span className="required">*</span>
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Share your experience with us... What did you like? What could be improved?"
                  rows="6"
                  required
                />
                <span className="char-count">{formData.feedback.length} characters</span>
              </div>

              {/* Would Recommend */}
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="wouldRecommend"
                    checked={formData.wouldRecommend}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span>I would recommend ED-tech to others</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="feedback-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="material-icons-round spinning">refresh</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <span className="material-icons-round">send</span>
                    Submit Feedback
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="feedback-info">
            <div className="info-card">
              <h3>Your Privacy Matters</h3>
              <p>Your feedback is confidential and used only to improve our services.</p>
            </div>
            <div className="info-card">
              <h3>Takes 2 Minutes</h3>
              <p>Quick and easy form to share your valuable experience with us.</p>
            </div>
            <div className="info-card">
              <h3>Help Others</h3>
              <p>Your feedback helps future students make better decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;