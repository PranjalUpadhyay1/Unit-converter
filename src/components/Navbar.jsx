import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Assuming index.css contains global styles including navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-brand">Unit Converter</Link>
      </div>
      <div className="navbar-container">
        {/* Brand logo or title */}
        <ul className="navbar-menu">
          {/* Navigation link for Length Converter */}
          <li className="navbar-item">
            <Link to="/length" className="navbar-link">Length</Link>
          </li>
          {/* Navigation link for Area Converter */}
          <li className="navbar-item">
            <Link to="/area" className="navbar-link">Area</Link>
          </li>
          {/* Navigation link for Temperature Converter */}
          <li className="navbar-item">
            <Link to="/temperature" className="navbar-link">Temperature</Link>
          </li>
          {/* Navigation link for Weight Converter */}
          <li className="navbar-item">
            <Link to="/weight" className="navbar-link">Weight</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;