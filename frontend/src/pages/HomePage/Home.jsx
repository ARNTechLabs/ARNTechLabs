import React, { useState, useEffect } from 'react';
import './Home.css';
import { programs } from '../../data/programs_data';
import { steps } from '../../data/steps_data';
import { companies } from '../../data/company_marquee_data';
import { testimonials } from '../../data/testimonialCarousel_data';

import ProgramCard from '../../components/ProgramCard/ProgramCard';
import StepCard from '../../components/RegistrationStepsCard/StepCard';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';

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
            CodSoft turns ambitious learners into job-ready professionals through
            hands-on internship programs built around real work, not theory.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Start Your Journey</button>
            <button className="btn-ghost">Browse Programs ↓</button>
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
          <div className="floating-card card-1">
            <span className="fc-icon">🎓</span>
            <div>
              <p className="fc-title">Offer Letter</p>
              <p className="fc-sub">Priya S. — TCS</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <span className="fc-icon">📈</span>
            <div>
              <p className="fc-title">Skill growth</p>
              <p className="fc-sub">+340% this month</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <span className="fc-icon">✅</span>
            <div>
              <p className="fc-title">Project shipped</p>
              <p className="fc-sub">Full Stack App</p>
            </div>
          </div>
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
          {programs.map((program, index) => (
            <ProgramCard program={program} key={program.id} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section">
        <div className="steps-inner">
          <div className="section-header left-align">
            <p className="section-eyebrow">HOW IT WORKS</p>
            <h2 className="section-title">Four steps to your<br />dream role.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <StepCard step={step} key={step.id} />
            ))}
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