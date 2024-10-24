import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Component-css/Header.css";
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode preference from localStorage (if saved)
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
        // Apply the saved mode when the component mounts
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Add/remove dark-mode class from body
        document.body.classList.toggle('dark-mode');
        // Save the preference in localStorage
        localStorage.setItem('darkMode', !darkMode);
    };

    return (
        <div className={`header ${darkMode ? 'dark' : ''}`}>
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

               
                <div id="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                </div>
            </div>
        </div>
    );
}
