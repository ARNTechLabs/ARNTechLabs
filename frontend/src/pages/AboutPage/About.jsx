import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">

      {/* Hero */}
      <section className="about-hero">
        <p className="about-eyebrow">WHO WE ARE</p>
        <h1 className="about-title">We help students <span>get hired.</span></h1>
        <p className="about-desc">
          EdTech is an IT services and consultancy that bridges the gap between
          classroom knowledge and real industry skills. Since 2019, we've trained
          5,000+ students across six programs built entirely around practical,
          real-world learning.
        </p>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat">
          <strong>5,000+</strong>
          <span>Students Trained</span>
        </div>
        <div className="stat">
          <strong>95%</strong>
          <span>Placement Rate</span>
        </div>
        <div className="stat">
          <strong>100+</strong>
          <span>Hiring Partners</span>
        </div>
        <div className="stat">
          <strong>4.9 ★</strong>
          <span>Avg. Rating</span>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="mv-card">
          <span className="mv-icon"></span>
          <h2>Our Mission</h2>
          <p>
            To keep every student job-ready by building curriculum directly from
            employer feedback — updated every quarter, delivered by active industry
            professionals, and supported long after graduation.
          </p>
        </div>
        <div className="mv-card">
          <span className="mv-icon"></span>
          <h2>Our Vision</h2>
          <p>
            A world where geography and privilege don't decide who gets quality
            tech education. We want to be the most trusted career launchpad for
            aspiring tech professionals across India.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2 className="about-section-title">What we stand for</h2>
        <div className="values-grid">
          {[
            { icon: '', title: 'Innovation',   desc: 'Always teaching what employers need today, not yesterday.' },
            { icon: '', title: 'Inclusion',    desc: 'Quality education for everyone, regardless of background.' },
            { icon: '', title: 'Practicality', desc: 'Real client projects. Skills that translate into real jobs.' },
            { icon: '', title: 'Growth',       desc: 'We care about your career long after you complete the program.' },
          ].map((v, i) => (
            <div key={i} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;