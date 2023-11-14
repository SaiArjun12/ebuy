// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" activeClassName="active">
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
