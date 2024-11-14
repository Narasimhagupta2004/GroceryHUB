import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this CSS file exists

const Home = () => {
  console.log("Home component rendered");

  return (
    <div className='home-container'>
      <h1>Welcome to Our Grocery Store</h1>
      <p>Explore our categories:</p>
      <div className='category-grid'>
        <Link to="/dals" className='category-card'>
          <img src="/images/categories/dals.avif" alt="Dals" />
          <h3>Dals & Pulses</h3>
        </Link>
        <Link to="/dry-fruits" className='category-card'>
          <img src="/images/categories/dry.jpg" alt="Dry Fruits" />
          <h3>Dry Fruits</h3>
        </Link>
        <Link to="/flours" className='category-card'>
          <img src="/images/categories/flours.png" alt="Flours" />
          <h3>Flours</h3>
        </Link>
        <Link to="/masalas" className='category-card'>
          <img src="/images/categories/masalas.jpg" alt="Masalas" />
          <h3>Masalas</h3>
        </Link>
        <Link to="/oils" className='category-card'>
          <img src="/images/categories/oils.webp" alt="Oils" />
          <h3>Edible Oils</h3>
        </Link>
        <Link to="/rice" className='category-card'>
          <img src="/images/categories/rice.png" alt="Rice" />
          <h3>Rice & Salt & Sugar</h3>
        </Link>
      </div>
      <div className="gocart">
        <Link to="/cart" className="gocart-button">Go to Cart</Link>
      </div>
    </div>
  );
};

export default Home;