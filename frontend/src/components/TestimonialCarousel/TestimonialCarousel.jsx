import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality - 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel-wrapper">
      <div className="testimonial-carousel-container">
        <div className="carousel-header">
          <p className="carousel-eyebrow">TESTIMONIALS</p>
          <h2 className="carousel-title">What our students say</h2>
        </div>

        <div className="carousel-content">
          {/* Left Side - Image */}
          <div className="carousel-image-container">
            <div className="image-wrapper">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="testimonial-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="carousel-text-container">
            <div className="testimonial-content">
              <div className="rating-stars">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <p className="testimonial-quote-text">
                "{currentTestimonial.quote}"
              </p>

              <div className="testimonial-author-info">
                <h3 className="author-name-text">{currentTestimonial.name}</h3>
                <p className="author-position-text">
                  {currentTestimonial.role} · {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;