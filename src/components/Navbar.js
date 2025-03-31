import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure correct CSS import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">KP💛</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

