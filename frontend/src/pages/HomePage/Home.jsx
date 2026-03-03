import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { steps } from '../../data/steps_data';
import { companies } from '../../data/company_marquee_data';
import { testimonials } from '../../data/testimonialCarousel_data';
import { technologies } from '../../data/weteach_marquee_data';
import MSMELogo from '../../assets/MSME_Logo.svg'
import IntershipCertificate from '../../assets/Internship_Certificate_Template.png'
import CrashCourseCertificate from '../../assets/Crash_Course_certificate_template.png'

import StepCard from '../../components/RegistrationStepsCard/StepCard';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import WeTeachCard from '../../components/WeTeachCard/WeTeachCard';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">

      {/* Hero */}
      <section className="home-hero">
        <div className="hero-bg-grid" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="material-icons-round">rocket_launch</span>
            Now enrolling — Batch 2026
          </div>
          <h1 className="hero-title">
            Build the skills<br />
            <span className="hero-title-accent">companies hire for.</span>
          </h1>
          <p className="hero-subtitle">
            ARN TechLabs turns ambitious learners into job-ready professionals through
            hands-on internship programs built around real work, not theory.
          </p>
          <div className="hero-cta">
            <Link to='/register'><button className="btn-primary">Start Your Journey</button></Link>
            <Link to='/programs'><button className="btn-ghost">Browse Programs</button></Link>
          </div>
          {/* <div className="hero-stats">
            <div className="hero-stat">
              <strong>5,000+</strong>
              <span>Students placed</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>95%</strong>
              <span>Placement rate</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>4.9 ★</strong>
              <span>Average rating</span>
            </div>
          </div> */}
        </div>
        <div className="hero-visual">
          <div className="hero-logo-container">
            <img src="/ARNTechLabs_LOGO.png" alt="ED-tech" className="hero-logo-image" />
          </div>
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <p className="marquee-label">Our students work at</p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {companies.map((c, i) => (
              <span key={i} className="marquee-item">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="steps-section">
        <div className="steps-container">
          <div className="section-header">
            <p className="section-eyebrow">HOW IT WORKS</p>
            <h2 className="section-title">Four steps to your<br />dream role.</h2>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              {steps.map((step, index) => (
                <StepCard step={step} key={step.id} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Teach Section */}
      <section className="we-teach-section">
        <div className="we-teach-container">
          <h2 className="we-teach-title">
            We <span className="teach-accent">Teach</span>
          </h2>

          <div className="tech-marquee-wrapper">
            <div className="tech-marquee-track">
              {/* First set */}
              {technologies.map((tech) => (
                <WeTeachCard key={tech.id} technology={tech} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {technologies.map((tech) => (
                <WeTeachCard key={`duplicate-${tech.id}`} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {/* <TestimonialCarousel testimonials={testimonials} /> */}

      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="certificates-container">
          <div className="section-header">
            <p className="section-eyebrow">Industry-Recognized Certifications</p>
            <h2 className="section-title">OUR ACCREDITATIONS</h2>
          </div>

          <div className="certificates-grid">
            {/* Certificate 1 - Completion */}
            <div className="certificate-card">
              <div className="cert-logo-wrapper">
                <img src={CrashCourseCertificate} alt="Internship Certificate" className='cert-internship1'/>
              </div>
              <h3 className="cert-card-title">Certificate of Completion</h3>
              <p className="cert-card-desc">Awarded upon successful completion of training</p>
              <ul className="cert-features">
                <li>
                  <span className="material-icons-round">check</span>
                  Industry recognized
                </li>
                <li>
                  <span className="material-icons-round">check</span>
                  Validates technical skills
                </li>
                <li>
                  <span className="material-icons-round">check</span>
                  Practical experience proof
                </li>
              </ul>
            </div>

            {/* Certificate 2 - MSME */}
            <div className="certificate-card cert-featured">
              <div className="cert-logo-wrapper">
                <img src={MSMELogo} alt="MSME Logo" className="cert-msme-logo" />
              </div>
              <h3 className="cert-card-title">MSME Registered</h3>
              <p className="cert-card-desc">Ministry of Micro, Small & Medium Enterprises</p>
              <div className="msme-info">
                <p className="msme-reg-number">UDYAM-KR-07-0066258</p>
                <p className="msme-act-info">Registered under MSME Act, 2006</p>
              </div>
            </div>

            {/* Certificate 3 - Internship */}
            <div className="certificate-card">
              <div className="cert-logo-wrapper">
                <img src={IntershipCertificate} alt="Internship Certificate" className='cert-internship'/>
              </div>
              <h3 className="cert-card-title">Internship Certificate</h3>
              <p className="cert-card-desc">Real-world industry experience recognition</p>
              <ul className="cert-features">
                <li>
                  <span className="material-icons-round">check</span>
                  Hands-on projects
                </li>
                <li>
                  <span className="material-icons-round">check</span>
                  Industry mentorship
                </li>
                <li>
                  <span className="material-icons-round">check</span>
                  Work experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Your next opportunity<br />starts here.</h2>
          <p className="cta-sub">Applications are open. Limited seats per batch.</p>
          <button className="btn-primary btn-large">Apply for Free →</button>
        </div>
      </section>

    </div>
  );
};

export default Home;