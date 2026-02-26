import React, { useState, useEffect } from 'react';
import './Home.css';
import { programs } from '../../data/programs_data';
import { steps } from '../../data/steps_data';
import { companies } from '../../data/company_marquee_data';
import { testimonials } from '../../data/testimonialCarousel_data';

import ProgramCard from '../../components/ProgramCard/ProgramCard';
import StepCard from '../../components/RegistrationStepsCard/StepCard';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import { Link } from 'react-router-dom';

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
          <div className="hero-badge">🚀 Now enrolling — Batch 2026</div>
          <h1 className="hero-title">
            Build the skills<br />
            <span className="hero-title-accent">companies hire for.</span>
          </h1>
          <p className="hero-subtitle">
            ARN TechLabs turns ambitious learners into job-ready professionals through
            hands-on internship programs built around real work, not theory.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Start Your Journey</button>
            <Link to='/programs'><button className="btn-ghost">Browse Programs</button></Link>
          </div>
          <div className="hero-stats">
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
          </div>
        </div>
        <div className="hero-visual">

          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
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

      {/* Programs */}
      <section className="programs-section" id="programs">
        <div className="section-header">
          <p className="section-eyebrow">PROGRAMS</p>
          <h2 className="section-title">Find your path.</h2>
          <p className="section-subtitle">
            Six intensive tracks designed with industry leaders to match what employers actually need.
          </p>
        </div>
        <div className="programs-grid">

        </div>
      </section>

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

      {/* Testimonial - NO wrapper sections, carousel handles everything */}
      <TestimonialCarousel testimonials={testimonials} />

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