import React from 'react';
import './Home.css';

const Home = () => {
  const programs = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description: "Master full-stack development with modern frameworks like React, Node.js, and MongoDB. Build real-world applications.",
      duration: "8 Weeks",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      icon: "📊",
      title: "Data Science",
      description: "Learn data analysis, machine learning, and AI. Work with Python, TensorFlow, and industry-standard tools.",
      duration: "10 Weeks",
      level: "Intermediate"
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Create stunning user interfaces and experiences. Master Figma, design systems, and user research methodologies.",
      duration: "6 Weeks",
      level: "Beginner"
    },
    {
      id: 4,
      icon: "📱",
      title: "Mobile Development",
      description: "Build native and cross-platform mobile apps using React Native and Flutter. Deploy to App Store and Play Store.",
      duration: "8 Weeks",
      level: "Intermediate"
    },
    {
      id: 5,
      icon: "🔒",
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and penetration testing. Protect systems from cyber threats.",
      duration: "12 Weeks",
      level: "Advanced"
    },
    {
      id: 6,
      icon: "☁️",
      title: "Cloud Computing",
      description: "Master AWS, Azure, and Google Cloud. Learn DevOps, containerization with Docker and Kubernetes.",
      duration: "10 Weeks",
      level: "Intermediate"
    }
  ];

  const features = [
    {
      icon: "🎓",
      title: "Expert Mentorship",
      description: "Learn from industry professionals with 10+ years of experience"
    },
    {
      icon: "💼",
      title: "Real Projects",
      description: "Work on actual client projects and build your portfolio"
    },
    {
      icon: "📜",
      title: "Certification",
      description: "Get industry-recognized certificates upon completion"
    },
    {
      icon: "🤝",
      title: "Placement Support",
      description: "95% placement rate with top companies in the industry"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Career with ED-tech</h1>
          <p className="hero-subtitle">
            Join thousands of students who landed their dream jobs through our 
            industry-focused internship programs. Learn from experts, work on real projects, 
            and accelerate your career growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Programs</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Edtech?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Choose from our wide range of internship programs designed to match industry demands
        </p>
        <div className="programs-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-meta">
                <span className="program-duration">⏱ {program.duration}</span>
                <span className="program-level">📈 {program.level}</span>
              </div>
              <button className="program-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">5000+</h3>
            <p className="stat-label">Students Trained</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Placement Rate</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Hiring Partners</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">4.9★</h3>
            <p className="stat-label">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Edtech's internship program changed my life. The hands-on projects and 
              expert mentorship helped me land a job at a top tech company within weeks 
              of completing the program!
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👨‍💻</div>
              <div className="author-info">
                <h4 className="author-name">Rajesh Kumar</h4>
                <p className="author-role">Full Stack Developer at TCS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-text">
            Join our next batch and transform your career with practical skills and industry experience
          </p>
          <button className="cta-button">Apply for Internship</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
