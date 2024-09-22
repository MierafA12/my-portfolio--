import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Component-css/Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <div className='name'>
                <div className='maf'></div>
            </div>

            {/* Hamburger Icon */}
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Links (shown or hidden based on isMenuOpen state) */}
            <div className={`links ${isMenuOpen ? "show" : ""}`}>
                <div className='one-link'>
                    <div className='act'>
                        <Link className="link" to="/" onClick={toggleMenu}>
                            <p>Home</p>
                        </Link>
                    </div>
                </div>
                <div className='one-link'>
                    <Link className="link" to="/About" onClick={toggleMenu}>
                        <p>About</p>
                    </Link>
                </div>
                <div className='one-link'>
                    <Link className="link" to="/Portfolio" onClick={toggleMenu}>
                        <p>Portfolio</p>
                    </Link>
                </div>
                <div className='one-link'>
                    <Link className="link" to="/contact" onClick={toggleMenu}>
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
