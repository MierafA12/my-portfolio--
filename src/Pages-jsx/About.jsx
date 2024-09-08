import React from 'react';
import '../Pages-css/About.css';
import { FaCode, FaTools, FaRocket } from 'react-icons/fa';

function About() {
    return (
        <div className="about-container">
            {/* <div className="about-content"> */}
                <div className="about-info">
                    
                    <div className="text-content">
                      <h1>About Me</h1>

                        <h2>Hello, I'm Mieraf Abebe!</h2>
                        <p>
                            I am a dedicated Software Engineer specializing in front-end development with a passion for creating
                            engaging and user-friendly applications. With a background in HTML, CSS, JavaScript, and React, I
                            strive to craft seamless user experiences and solve complex problems through code.
                        </p>
                        <p>
                            My journey in technology has led me to explore various technologies including Node.js, Express, MongoDB,
                            Python, and C++. I am committed to continuous learning and improvement, and I enjoy tackling new challenges.
                        </p>
                        <p>
                        As a student in Software Engineering at Debre Birhan University, I am continuously building my skills and knowledge. 
                        Outside of coding, I love exploring new tech trends, contributing to open-source projects, and sharing knowledge with others.
                         I believe in the power of collaboration and am always open to connecting with like-minded professionals.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills & Expertise</h2>
                    <div className="skills-icons">
                        <div className="skill">
                            <FaCode />
                            <p>Front-End Development</p>
                        </div>
                        <div className="skill">
                            <FaTools />
                            <p>Backend Technologies</p>
                        </div>
                        <div className="skill">
                            <FaRocket />
                            <p>Continuous Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default About;
