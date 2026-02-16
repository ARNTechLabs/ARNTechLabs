import React, { useState, useEffect } from 'react';
import './Review.css';

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Student reviews data
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Full Stack Development",
      rating: 5,
      image: "👩‍💻",
      review: "The internship program completely transformed my coding skills. The hands-on projects and mentorship were invaluable. I landed my dream job within a month of completing the program!",
      date: "January 2026"
    },
    {
      id: 2,
      name: "Rahul Patel",
      course: "Data Science & ML",
      rating: 5,
      image: "👨‍💼",
      review: "Best learning experience ever! The real-world projects and industry experts made all the difference. The support team was always available to help with any doubts.",
      date: "December 2025"
    },
    {
      id: 3,
      name: "Ananya Kumar",
      course: "UI/UX Design",
      rating: 5,
      image: "👩‍🎨",
      review: "Amazing internship program! I learned so much about design thinking and user research. The portfolio I built here helped me get multiple job offers. Highly recommended!",
      date: "November 2025"
    },
    {
      id: 4,
      name: "Arjun Singh",
      course: "Mobile App Development",
      rating: 5,
      image: "👨‍💻",
      review: "The practical approach to learning made complex concepts easy to understand. The mentors were experienced professionals who genuinely cared about our growth and success.",
      date: "October 2025"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      course: "Digital Marketing",
      rating: 5,
      image: "👩‍💼",
      review: "This internship exceeded all my expectations! The live campaigns and analytics training gave me the confidence to pursue digital marketing as my career. Thank you for this opportunity!",
      date: "September 2025"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="review-container">
      {/* Hero Section */}
      <section className="review-hero">
        <h1 className="review-title">Student Reviews</h1>
        <p className="review-subtitle">
          Hear what our successful interns have to say about their learning journey
        </p>
      </section>

      {/* Reviews Slider Section */}
      <section className="reviews-section">
        <div className="reviews-slider-container">
          <h2 className="section-heading">Success Stories</h2>
          
          <div className="slider-wrapper">
            {/* Navigation Buttons */}
            <button className="slider-btn prev-btn" onClick={prevReview} aria-label="Previous review">
              ‹
            </button>

            {/* Reviews Slider */}
            <div className="reviews-slider">
              <div 
                className="reviews-track"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-image">{review.image}</div>
                      <div className="reviewer-info">
                        <h3 className="reviewer-name">{review.name}</h3>
                        <p className="reviewer-course">{review.course}</p>
                        <div className="review-rating">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="star">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="review-content">
                      <p className="review-text">"{review.review}"</p>
                      <p className="review-date">{review.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="slider-btn next-btn" onClick={nextReview} aria-label="Next review">
              ›
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentReview ? 'active' : ''}`}
                onClick={() => goToReview(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Happy Students</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Placement Rate</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">4.9/5</h3>
            <p className="stat-label">Average Rating</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Partner Companies</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Your Journey?</h2>
        <p className="cta-text">Join thousands of successful students who transformed their careers with us</p>
        <button className="cta-button">Apply Now</button>
      </section>
    </div>
  );
};

export default Review;
