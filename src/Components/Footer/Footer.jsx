import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
