import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Ensure this CSS file exists

const Nav = () => {
  return (
    <div className='header-container'>
      <h1 className='header-title'>Grocery Store</h1>
      <nav className='nav-links'>
        <Link to="/dals" className='nav-item'>Dals & Pulses</Link>
        <Link to="/dry-fruits" className='nav-item'>Dry Fruits</Link>
        <Link to="/flours" className='nav-item'>Flours</Link>
        <Link to="/masalas" className='nav-item'>Masalas</Link>
        <Link to="/oils" className='nav-item'>Edible Oils</Link>
        <Link to="/rice" className='nav-item'>Rice & Others</Link>
      </nav>
    </div>
  );
};

export default Nav;