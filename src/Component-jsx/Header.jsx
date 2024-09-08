import React from 'react';
import { Link } from 'react-router-dom';
import "../Component-css/Header.css";

export default function Header() {
    return (
 <div className='header'> 
   <div className='name'>
     <div className='maf'></div>
   </div>
   <div className='links'>
    <div className='one-link'>
    <div className='act'><Link className="link" to="/">
         <p> Home</p>
    </Link></div>
    </div>
    <div className='one-link'>
    <Link className="link" to="/About">
         <p>About</p>
    </Link>
       
    </div>
    <div className='one-link'>   
     <Link className="link" to="/Portfolio">
         <p>Portfolio</p>
    </Link>
    </div>
    <div className='one-link'>
    <Link className="link" to="/contact">
         <p>contact</p>
    </Link>
    </div>
   </div> 
 </div>
    );
}