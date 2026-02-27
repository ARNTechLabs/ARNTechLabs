import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-eyebrow">ABOUT US</p>
          <h1 className="about-hero-title">
            Transforming careers through<br />
            <span className="about-hero-accent">practical education.</span>
          </h1>
          <p className="about-hero-subtitle">
            We're on a mission to bridge the gap between education and employment by providing 
            hands-on, industry-relevant training programs.
          </p>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="about-bento-section">
        <div className="about-container">
          <div className="bento-grid">
            
            {/* Card 1 - Our Story */}
            <div className="bento-card bento-card-1">
              <div className="bento-badge">1</div>
              <div className="bento-content">
                <h2 className="bento-title">Our Story</h2>
                <p className="bento-text">
                  Founded in 2020, ED-tech began with a simple vision: to make quality tech education 
                  accessible to everyone. We noticed a significant gap between what students learn in 
                  traditional education and what the industry actually needs.
                </p>
                <p className="bento-text">
                  Our founders, experienced tech professionals who faced similar challenges early in 
                  their careers, decided to create a platform that focuses on practical skills, real 
                  projects, and direct industry connections.
                </p>
                <div className="bento-stats">
                  <div className="stat-item">
                    <span className="stat-number">2020</span>
                    <span className="stat-label">Founded</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5K+</span>
                    <span className="stat-label">Students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Our Mission */}
            <div className="bento-card bento-card-2">
              <div className="bento-badge">2</div>
              <div className="bento-content">
                <h2 className="bento-title">Our Mission</h2>
                <p className="bento-text">
                  To empower aspiring tech professionals with practical skills and real-world experience 
                  that make them job-ready from day one.
                </p>
                <ul className="mission-list">
                  <li>Industry-relevant curriculum</li>
                  <li>Hands-on project experience</li>
                  <li>Expert mentorship</li>
                  <li>Career placement support</li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Our Values */}
            <div className="bento-card bento-card-3">
              <div className="bento-badge">3</div>
              <div className="bento-content">
                <h2 className="bento-title">Our Values</h2>
                <div className="values-grid">
                  <div className="value-item">
                    <span className="value-icon">🎯</span>
                    <span className="value-text">Excellence</span>
                  </div>
                  <div className="value-item">
                    <span className="value-icon">🤝</span>
                    <span className="value-text">Integrity</span>
                  </div>
                  <div className="value-item">
                    <span className="value-icon">💡</span>
                    <span className="value-text">Innovation</span>
                  </div>
                  <div className="value-item">
                    <span className="value-icon">🌟</span>
                    <span className="value-text">Impact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Why Choose Us */}
            <div className="bento-card bento-card-4">
              <div className="bento-badge">4</div>
              <div className="bento-content">
                <h2 className="bento-title">Why Choose Us?</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">💼</div>
                    <div className="feature-info">
                      <h3>Real Projects</h3>
                      <p>Work on actual client projects, not theoretical exercises</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">👨‍🏫</div>
                    <div className="feature-info">
                      <h3>Expert Mentors</h3>
                      <p>Learn from industry professionals with 10+ years experience</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🎓</div>
                    <div className="feature-info">
                      <h3>Job Placement</h3>
                      <p>95% placement rate with our partner companies</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <div className="feature-info">
                      <h3>Fast Track</h3>
                      <p>Get job-ready in weeks, not years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Get in Touch */}
            <div className="bento-card bento-card-5">
              <div className="bento-badge">5</div>
              <div className="bento-content">
                <h2 className="bento-title">Get in Touch</h2>
                <p className="bento-text">
                  Have questions? Want to learn more about our programs?
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>info@edtech.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+91 1234567890</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>Bengaluru, India</span>
                  </div>
                </div>
                <button className="contact-btn">Contact Us</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to start your journey?</h2>
          <p className="about-cta-subtitle">Join thousands of students who transformed their careers with us.</p>
          <button className="about-btn-primary">Explore Programs →</button>
        </div>
      </section>
    </div>
  );
};

export default About;