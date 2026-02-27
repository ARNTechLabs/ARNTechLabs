import { Link } from 'react-router-dom';

function ProgramCard({program}) {
    return (
        <div className="program-card">
            {program.tag && <div className="program-tag">{program.tag}</div>}
            <div className="program-icon">{program.icon}</div>
            <h3 className="program-name">{program.title}</h3>
            <p className="program-desc">{program.description}</p>
            <div className="program-footer">
                <div className="program-badges">
                    <span className="badge"> {program.duration}</span>
                    <span className="badge"> {program.level}</span>
                </div>
                <Link><button className="program-cta">Learn more →</button></Link>
            </div>
        </div>
    )
};

export default ProgramCard;