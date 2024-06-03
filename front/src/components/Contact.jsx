import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <img src="/needs/sans.jpeg" alt="Sandeep Nadesan" className="contact-image" />
          <div className="contact-info">
            <h3>Sandeep Nadesan</h3>
            <p>Phone: +91-9944882544</p>
            <p>Email: sandeepnadesankns@gmail.com</p>
          </div>
        </div>
        <div className="contact-card">
          <img src="/needs/sri.jpeg" alt="Vasanthasri Thangaraj" className="contact-image" />
          <div className="contact-info">
            <h3>Vasanthasri Thangaraj</h3>
            <p>Phone: +91-8072636468</p>
            <p>Email: vasanthasrit@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
