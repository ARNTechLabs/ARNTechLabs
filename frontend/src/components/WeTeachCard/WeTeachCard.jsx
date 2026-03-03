import React from 'react';
import './WeTeachCard.css';

const WeTeachCard = ({ technology }) => {
  return (
    <div className="tech-card">
      <div className="tech-logo-wrapper">
        <img 
          src={technology.logo} 
          alt={technology.name} 
          className={`tech-logo ${technology.isDark ? 'dark-logo' : ''}`}
        />
      </div>
      <p className="tech-name">{technology.name}</p>
    </div>
  );
};

export default WeTeachCard;