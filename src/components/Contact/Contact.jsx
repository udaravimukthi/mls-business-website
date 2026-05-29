import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Ready to Grow Your Business?</h2>
      <p>
        Let's create a customized digital marketing strategy that drives results for your business.
        Get your free consultation and project quote today.
      </p>
      <div className="contact-info">
        <span>📧 hello@agency.com</span>
        <span>📞 +1 (555) 123-4567</span>
        <span>📘 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></span>
        <span>📱 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></span>
        <span>🎵 <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></span>
      </div>
    </section>
  );
}

export default Contact;