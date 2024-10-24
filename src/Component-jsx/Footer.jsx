import React from "react";
import '../Component-css/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} mierafabebe12@gmail.com. All rights reserved.</p>
     <hr></hr>
    </footer>
  );
};

export default Footer;
