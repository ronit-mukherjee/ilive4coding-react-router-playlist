import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li>
          <Link to="/services/1234">Service 1</Link>
        </li>
        <li>
          <Link to="/services/5678">Service 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
