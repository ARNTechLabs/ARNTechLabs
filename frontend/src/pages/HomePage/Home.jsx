import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { icon: "💻", title: "Full Stack Development", description: "Master React, Node.js, MongoDB. Build production-grade apps from scratch with real client projects.", duration: "8 Weeks", level: "All Levels", tag: "Most Popular" },
    { icon: "📊", title: "Data Science & AI", description: "Python, TensorFlow, ML algorithms. Go from raw data to intelligent systems that solve real problems.", duration: "10 Weeks", level: "Intermediate", tag: "Trending" },
    { icon: "🎨", title: "UI/UX Design", description: "Figma, design systems, user research. Create interfaces people love using every day.", duration: "6 Weeks", level: "Beginner", tag: "" },
    { icon: "📱", title: "Mobile Development", description: "React Native & Flutter. Ship to both App Store and Play Store with a single codebase.", duration: "8 Weeks", level: "Intermediate", tag: "" },
    { icon: "🔒", title: "Cybersecurity", description: "Ethical hacking, penetration testing, network defence. Become the expert companies need most.", duration: "12 Weeks", level: "Advanced", tag: "High Demand" },
    { icon: "☁️", title: "Cloud & DevOps", description: "AWS, Azure, Docker, Kubernetes. Build scalable infrastructure that powers modern software.", duration: "10 Weeks", level: "Intermediate", tag: "" },
  ];

  const steps = [
    { number: "01", title: "Apply Online", description: "Fill out a short application. We review every submission personally within 24 hours." },
    { number: "02", title: "Get Matched", description: "We pair you with a mentor and program that fits your goals and current skill level." },
    { number: "03", title: "Learn & Build", description: "Work on real projects with expert guidance, live sessions, and peer collaboration." },
    { number: "04", title: "Get Placed", description: "Leverage our network of 100+ hiring partners to land your first or next tech role." },
  ];

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
            {['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Accenture', 'IBM', 'Oracle', 'SAP', 'Capgemini',
              'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Accenture', 'IBM', 'Oracle', 'SAP', 'Capgemini'].map((c, i) => (
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
          {programs.map((p, i) => (
            <div key={i} className="program-card">
              {p.tag && <div className="program-tag">{p.tag}</div>}
              <div className="program-icon">{p.icon}</div>
              <h3 className="program-name">{p.title}</h3>
              <p className="program-desc">{p.description}</p>
              <div className="program-footer">
                <div className="program-badges">
                  <span className="badge">⏱ {p.duration}</span>
                  <span className="badge">📈 {p.level}</span>
                </div>
                <button className="program-cta">Learn more →</button>
              </div>
            </div>
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
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{s.number}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="testimonial-inner">
          <div className="testimonial-quote">"</div>
          <p className="testimonial-text">
            I came in with zero professional experience and left with a portfolio,
            a certificate, and an offer from Infosys. The mentorship at CodSoft
            is genuinely unlike anything else I've found online.
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">👩‍💻</div>
            <div>
              <p className="author-name">Priya Sharma</p>
              <p className="author-role">Full Stack Developer · Infosys</p>
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