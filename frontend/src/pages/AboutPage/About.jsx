import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">Get to know us</h1>
        <div className="about-intro">
          <p>
            <strong>EdTech</strong> are IT services and IT consultancy that specializes in creating innovative solutions for businesses. 
            We are passionate about technology and believe in the power of software to transform the world. Our internship program is 
            just one of the ways in which we are investing in the future of the industry.
          </p>
          <p>
            At <strong>EdTech</strong>, we believe practical knowledge is the key to success in the tech industry. Our aim is to help 
            students lacking basic skills by offering hands-on learning through live projects and real-world examples. Our team consists 
            of industry experts who are dedicated to equipping interns with the knowledge and skills needed to succeed in their careers. 
            We foster an inclusive and supportive environment that encourages learning, growth, and creativity.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-box">
            <h2>Our mission</h2>
            <p>
              Software development is an iterative process, and the mission includes continually improving software solutions. 
              This entails gathering feedback, identifying areas for enhancement, and implementing updates to make the software 
              more efficient, user-friendly, and reliable. Continuous improvement also involves staying up to date with the 
              latest technologies, tools, and industry trends.
            </p>
          </div>
          <div className="vision-box">
            <h2>Our vision</h2>
            <p>
              The vision of software development is to create innovative solutions that push the boundaries of technology. 
              This involves leveraging emerging technologies, exploring new ideas, and developing software that brings novel 
              approaches to solving problems and improving the lives of users.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/internships">Internships</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal Links</h3>
            <ul>
              <li><a href="/privacy">Privacy policy</a></li>
              <li><a href="/refund">Refund policy</a></li>
              <li><a href="/terms">Terms and conditions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Info</h3>
            <p className="contact-email">NA</p>
            <div className="newsletter">
              <p>Subscribe for daily updates</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="email-input"
                />
                <button className="subscribe-btn">Join our mailing list now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><i className="social-icon"></i></a>
              <a href="#" aria-label="Email"><i className="social-icon"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="social-icon"></i></a>
              <a href="#" aria-label="Twitter"><i className="social-icon"></i></a>
            </div>
          </div>
          <p className="copyright">
            Copyright ©2023 <strong>ED-TECH</strong>. All Rights Reserved Designed By Team <strong>EdTech</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;