import { faEnvelope, faHome, faInfoCircle, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useCart } from '../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../contexts/SearchContext'; // Ensure this path is correct
import './Header.css';
import search_icon_light from './search-w.png'; // Ensure this path is correct
const Header = () => {
  const { cartItems } = useCart(); // Use cartItems instead of cart for clarity
  const { setSearchQuery } = useSearch();

  // Check if cartItems is an array before calling reduce
  const totalItems = Array.isArray(cartItems) 
    ? cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0) 
    : 0; // Fallback to 0 if cartItems is not an array

  return (
    <div className='navbar'>
      <div className='search-box'>
        <input
          type="text"
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)} // Update global search query
        />
        <img src={search_icon_light} alt="Search Icon" />
      </div>

      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link to="/Register"><FontAwesomeIcon icon={faUser} /> Register</Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart {totalItems > 0 && <span>({totalItems})</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;