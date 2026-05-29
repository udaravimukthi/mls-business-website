import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">MLS Creative Hub</h1>
        <nav className="nav-links">
  <a href="#vision">Our Vision</a>
  <a href="#success-stories">Success Stories</a>
  <a href="#services">Services</a>
  <a href="#testimonials">Industry Recognition</a>
  <a href="#contact">Contact Us</a>
</nav>
      </div>
    </header>
  );
}

export default Header;