import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

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
                <p className="bento-text">
                  Over the years, we have trained thousands of learners through carefully
                  designed programs that emphasize hands-on experience, mentorship, and
                  real-world problem solving. Our curriculum evolves continuously to stay
                  aligned with emerging technologies and industry standards.
                </p>

                <p className="bento-text">
                  At ED-tech, we believe learning should be immersive and transformative.
                  That’s why we integrate live sessions, collaborative projects, and career
                  guidance into every program, ensuring our students graduate with both
                  confidence and competence.
                </p>

                <p className="bento-text">
                  Today, we are building more than just a learning platform — we are
                  cultivating a global community of innovators, creators, and leaders who
                  are ready to shape the future of technology.
                </p>
                <div className="bento-stats">
                  <div className="stat-item">
                    <span className="stat-number">2026</span>
                    <span className="stat-label">Founded</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Our Mission */}
            <div className="bento-card bento-card-2">
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
            {/* Card 3 - Our Values */}
            <div className="bento-card bento-card-3">
              <div className="bento-content">
                <h2 className="bento-title">Our Values</h2>

                <div className="values-grid">

                  <div className="value-item">
                    
                    <div className="value-content">
                      <span className="value-text">Excellence</span>
                      <p className="value-desc">
                        High standards in learning and execution.
                      </p>
                    </div>
                  </div>

                  <div className="value-item">
                    
                    <div className="value-content">
                      <span className="value-text">Integrity</span>
                      <p className="value-desc">
                        Transparency and ethical commitment.
                      </p>
                    </div>
                  </div>

                  <div className="value-item">
                    
                    <div className="value-content">
                      <span className="value-text">Innovation</span>
                      <p className="value-desc">
                        Adapting to future technologies.
                      </p>
                    </div>
                  </div>

                  <div className="value-item">
                    
                    <div className="value-content">
                      <span className="value-text">Impact</span>
                      <p className="value-desc">
                        Building meaningful careers.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Card 4 - Why Choose Us */}
            <div className="bento-card bento-card-4">
              <div className="bento-content">
                <h2 className="bento-title">Why Choose Us?</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">

                    </div>
                    <div className="feature-info">
                      <h3>Real Projects</h3>
                      <p>Work on actual client projects, not theoretical exercises</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">

                    </div>
                    <div className="feature-info">
                      <h3>Expert Mentors</h3>
                      <p>Learn from industry professionals with 10+ years experience</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">

                    </div>
                    <div className="feature-info">
                      <h3>Job Placement</h3>
                      <p>95% placement rate with our partner companies</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">

                    </div>
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
              <div className="bento-content">
                <h2 className="bento-title">Get in Touch</h2>
                <p className="bento-text">
                  Have questions? Want to learn more about our programs?
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="material-icons-round contact-icon-mat">email</span>
                    <span>info@edtech.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="material-icons-round contact-icon-mat">phone</span>
                    <span>+91 1234567890</span>
                  </div>
                  <div className="contact-item">
                    <span className="material-icons-round contact-icon-mat">location_on</span>
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
          <Link to='/programs'><button className="about-btn-primary">Explore Programs →</button></Link>
        </div>
      </section>
    </div>
  );
};

export default About;