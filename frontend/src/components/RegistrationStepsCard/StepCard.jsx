function StepCard({step}) {
    return (
        <div className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
        </div>
    )
};

export default StepCard;