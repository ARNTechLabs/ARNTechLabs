import React from 'react';
import './StepCard.css';

const StepCard = ({ step, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-step ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <div className="step-number-timeline">{step.number}</div>
        <h3 className="step-title-timeline">{step.title}</h3>
        <p className="step-desc-timeline">{step.description}</p>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
};

export default StepCard;