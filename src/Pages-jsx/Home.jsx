
import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages-css/Home.css'; // Import the CSS file
import { FaGithub, FaGoogle, FaLinkedin, FaTelegram } from 'react-icons/fa';
import  About from '../Pages-jsx/About.jsx'; // Import
import  Portfolio from '../Pages-jsx/Portfolio.jsx';
import  Contact from '../Pages-jsx/Contact.jsx';
import Footer from '../Component-jsx/Footer.jsx';

const Home = () => {
  return (
    <div className='home'>
    <div className="home-content">
      <div className="content">
        <h1>Hi, I Am Mieraf Abebe</h1>
        <h3>Software Engineer</h3>
        <p>
          I am a software engineer and full-stack developer who is highly skilled in front-end development. I have strong proficiency in HTML, CSS, JavaScript, and its framework React. I have also explored Node.js and other programming languages. In addition to web development, I also work on mobile applications using React Native,
           building performant and user-friendly apps. As a student, I focus on understanding and solving problems.</p>
        <div className="social-links">
          <a href="https://t.me/mafi124679" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaTelegram/>      
         </a>
          <a href="https://www.linkedin.com/in/mieraf-abebe-971ba1323/" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
          </a>
          <a href="https://github.com/MierafA12" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
          </a>
          <a href="https://mierafabebe12@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <FaGoogle/>
          </a>
        </div>
        <div className="buttons">
          
          <Link to="contact"><button className="ggg">Contact Me</button></Link>
          <a
            href="https://docs.google.com/document/d/1EoMhLeRAON8lusvsiyh3C4QUwE7IpSiRZdda0dRFvfE/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ggg" id="resume">Resume</button>
          </a>

        </div>
      </div>
      <div className="profile"></div>
    </div>
<About/>
<Portfolio/>
<Contact/>
<Footer/>
</div>
    
  );
};

export default Home;
