// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">STOCKS</h1>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
