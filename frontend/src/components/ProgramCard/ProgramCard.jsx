import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/program/${program.id}`);
  };

  return (
    <div className="program-card" onClick={handleClick}>
      {program.tag && <div className="program-tag">{program.tag}</div>}

      {/* Top half — image */}
      <div className="program-image-half">
        <img
          src={program.icon}
          alt={program.title}
          className="program-icon-image"
        />
      </div>

      {/* Bottom half — content */}
      <div className="program-content-half">
        <h3 className="program-name">{program.title}</h3>
        <p className="program-desc">{program.description}</p>

        <div className="program-footer">
          <div className="program-badges">
            <span className="badge">
              <span className="material-icons-round badge-icon">schedule</span>
              {program.duration}
            </span>
            <span className="badge">
              <span className="material-icons-round badge-icon">signal_cellular_alt</span>
              {program.level}
            </span>
          </div>
          <button className="program-cta">
            Learn More
            <span className="material-icons-round">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;