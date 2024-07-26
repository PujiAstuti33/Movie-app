// src/components/navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Tambahkan useLocation di sini
import PropTypes from 'prop-types';

const navbar = () => {
  const location = useLocation();
  const getClassName = (path) => location.pathname === path ? 'text-yellow-400' : 'text-white';

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className={getClassName('/')}>Home</Link>
        </li>
        <li>
          <Link to="/login" className={getClassName('/login')}>Login</Link>
        </li>
        <li>
          <Link to="/register" className={getClassName('/register')}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
