import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { programs } from '../../data/programs_data';
import { Link } from 'react-router-dom';
import './ProgramDetails.css';

const ProgramDetails = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const foundProgram = programs.find(p => p.id === programId);
    if (foundProgram) {
      setProgram(foundProgram);
      window.scrollTo(0, 0);
    } else {
      navigate('/programs');
    }
  }, [programId, navigate]);

  if (!program) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="program-details-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="program-hero-container">
          <div className="program-hero-content">
            <div className="program-hero-icon">
              <img src={program.icon} alt={program.title} />
            </div>
            <h1 className="program-hero-title">{program.title}</h1>
            <p className="program-hero-description">{program.description}</p>
            <div className="program-hero-meta">
              <div className="meta-item">
                <span className="material-icons-round">schedule</span>
                <span>{program.duration}</span>
              </div>
              <div className="meta-item">
                <span className="material-icons-round">signal_cellular_alt</span>
                <span>{program.level}</span>
              </div>
              <div className="meta-item">
                <span className="material-icons-round">currency_rupee</span>
                <span>{program.price}</span>
              </div>
            </div>
            <div className="program-hero-cta">
              <button className="btn-enroll">Enroll Now</button>
              <button className="btn-download">Download Syllabus</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="program-content">
        <div className="program-content-container">
          
          {/* Highlights */}
          <div className="content-section">
            <h2 className="section-title">Program Highlights</h2>
            <div className="highlights-grid">
              {program.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <span className="material-icons-round highlight-icon">check_circle</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="content-section">
            <h2 className="section-title">Curriculum Overview</h2>
            <div className="curriculum-list">
              {program.curriculum.map((week, index) => (
                <div key={index} className="curriculum-week">
                  <div className="week-header">
                    <span className="week-number">Week {week.week}</span>
                    <h3 className="week-title">{week.title}</h3>
                  </div>
                  <ul className="week-topics">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <span className="material-icons-round">arrow_right</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="content-section">
            <h2 className="section-title">Prerequisites</h2>
            <ul className="prerequisites-list">
              {program.prerequisites.map((prereq, index) => (
                <li key={index}>
                  <span className="material-icons-round">done</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div className="content-section">
            <h2 className="section-title">What You'll Learn</h2>
            <ul className="outcomes-list">
              {program.outcomes.map((outcome, index) => (
                <li key={index}>
                  <span className="material-icons-round">star</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="program-cta-section">
        <div className="program-cta-container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who transformed their careers with this program.</p>
          <button className="btn-enroll-large">Enroll Now →</button>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;