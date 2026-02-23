import React, { useState, useEffect } from 'react';
import { reviews } from '../../data/reviews_data';
import './Review.css';

const Review = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prev = () => setCurrent(p => (p - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(p => (p + 1) % reviews.length);

  return (
    <div className="review-page">

      {/* Hero */}
      <section className="rv-hero">
        <p className="rv-eyebrow">WHAT STUDENTS SAY</p>
        <h1 className="rv-title">Real results.<br /><span>Real stories.</span></h1>
        <p className="rv-sub">Hear directly from students who transformed their careers with EdTech.</p>
      </section>

      {/* Slider */}
      <section className="rv-slider-section">
        <div className="rv-slider-wrap">

          {/* Prev */}
          <button className="rv-arrow rv-prev" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Track */}
          <div className="rv-slider">
            <div
              className="rv-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map(r => (
                <div key={r.id} className="rv-card">
                  <div className="rv-quote">"</div>
                  <p className="rv-text">{r.text}</p>
                  <div className="rv-footer">
                    <div className="rv-avatar">{r.avatar}</div>
                    <div className="rv-info">
                      <p className="rv-name">{r.name}</p>
                      <p className="rv-course">{r.course}</p>
                      <div className="rv-stars">
                        {[...Array(r.rating)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                    </div>
                    <p className="rv-date">{r.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button className="rv-arrow rv-next" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="rv-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`rv-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="rv-counter">{current + 1} / {reviews.length}</p>
      </section>

      {/* Stats */}
      <section className="rv-stats">
        <div className="rv-stat">
          <strong>1,000+</strong>
          <span>Happy Students</span>
        </div>
        <div className="rv-stat">
          <strong>95%</strong>
          <span>Placement Rate</span>
        </div>
        <div className="rv-stat">
          <strong>4.9 / 5</strong>
          <span>Average Rating</span>
        </div>
        <div className="rv-stat">
          <strong>50+</strong>
          <span>Partner Companies</span>
        </div>
      </section>

      {/* CTA */}
      <section className="rv-cta">
        <h2>Ready to start your journey?</h2>
        <p>Join thousands of students who transformed their careers with us.</p>
        <button className="rv-cta-btn">Apply Now →</button>
      </section>

    </div>
  );
};

export default Review;