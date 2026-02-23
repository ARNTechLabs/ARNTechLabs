import React from 'react';
import { programs } from '../../data/programs_data';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-page-container">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-content">
          <p className="programs-hero-eyebrow">OUR PROGRAMS</p>
          <h1 className="programs-hero-title">
            Find your path to<br />
            <span className="programs-hero-accent">tech excellence.</span>
          </h1>
          <p className="programs-hero-subtitle">
            Six intensive tracks designed with industry leaders to match what employers actually need. 
            Real projects, expert mentorship, and guaranteed placement support.
          </p>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="programs-grid-section">
        <div className="programs-container">
          <div className="programs-section-header">
            <p className="programs-section-eyebrow">CHOOSE YOUR TRACK</p>
            <h2 className="programs-section-title">All Programs</h2>
            <p className="programs-section-subtitle">
              Each program includes live projects, 1-on-1 mentorship, certification, and job placement assistance.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <ProgramCard program={program} key={program.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="programs-features-section">
        <div className="programs-container">
          <h2 className="features-title">What's included in every program</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-name">Real-World Projects</h3>
              <p className="feature-desc">Work on actual client projects and build a portfolio that impresses employers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-name">Expert Mentorship</h3>
              <p className="feature-desc">Get 1-on-1 guidance from industry professionals with 10+ years of experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📜</div>
              <h3 className="feature-name">Certification</h3>
              <p className="feature-desc">Earn an industry-recognized certificate upon successful completion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-name">Placement Support</h3>
              <p className="feature-desc">Access our network of 200+ hiring partners and get interview preparation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-name">Lifetime Access</h3>
              <p className="feature-desc">Keep access to all course materials and updates even after completion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-name">Community Support</h3>
              <p className="feature-desc">Join a thriving community of learners and alumni for networking and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta-section">
        <div className="programs-cta-inner">
          <h2 className="programs-cta-title">Ready to start learning?</h2>
          <p className="programs-cta-subtitle">Join 5,000+ students who transformed their careers with CodSoft.</p>
          <button className="programs-btn-primary">Get Started Today →</button>
        </div>
      </section>
    </div>
  );
};

export default Programs;