import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">

            {/* Top grid */}
            <div className="footer-grid">

                {/* Brand */}
                <div className="footer-brand">
                    <p className="footer-logo">ARN <span>TechLabs</span></p>
                    <p className="footer-bio">
                        Empowering the next generation of tech professionals
                        through hands-on learning and real industry mentorship.
                    </p>
                    <div className="footer-socials">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/arntechlabs?igsh=MW5wNm9zOWxrMm51Mg==" aria-label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5"/>
                                <circle cx="12" cy="12" r="3"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                            </svg>
                        </a>
                        {/* Email */}
                        <a href="mailto:hello@edtech.in" aria-label="Email">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" aria-label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </a>
                        {/* X / Twitter */}
                        <a href="#" aria-label="X">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.93l4.258 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/reviews">Reviews</NavLink></li>
                        <li><NavLink to="/programs">Programs</NavLink></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms &amp; Conditions</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-col">
                    <h4>Stay Updated</h4>
                    <p className="footer-newsletter-text">
                        Get weekly tips, program updates, and career resources.
                    </p>
                    <div className="footer-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="button">Subscribe →</button>
                    </div>
                    <p className="footer-contact"> hello@ARNTechLabs.in</p>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p className="footer-copy">
                    ©2026 <strong>ARNTechLabs</strong>. All Rights Reserved.
                </p>
                <p className="footer-credit">
                    Designed by Team <strong>ARNTechLabs</strong>
                </p>
            </div>

        </footer>
    );
}

export default Footer;