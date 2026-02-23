import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <NavLink to='/' ><span className="logo-text">ARN TechLabs</span></NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/about' className='nav-link'>About</NavLink>
                        <NavLink to='/reviews' className='nav-link'>Reviews</NavLink>
                        <NavLink to='/programs' className='nav-link'>Programs</NavLink>
                    </div>

                    {/* CTA Buttons */}
                    <div className="navbar-buttons">
                        <button className="btn btn-outline">Sign In</button>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-btn">
                        <button onClick={toggleMenu} className="hamburger">
                            <svg
                                width="24"
                                height="24"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <NavLink to='/' className="mobile-link">Home</NavLink>
                        <NavLink to='/about' className='mobile-link'>About</NavLink>
                        <NavLink to='/reviews' className='mobile-link'>Reviews</NavLink>
                        <NavLink to='/programs' className='mobile-link'>Programs</NavLink>
                        <div className="mobile-buttons">
                            <button className="btn btn-outline">Sign In</button>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;