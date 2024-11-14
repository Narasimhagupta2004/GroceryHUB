import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Import the SearchContext
import Nav from './Nav';
import './Rice.css';

const Rice = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Rice component rendered"); // Corrected log message

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Basmathi Rice", price: 29.99, image: "/images/RiceAndOthers/BasmathiRice.png" },
      { id: uuidv4(), name: "Brown Rice 10Kg", price: 29.99, image: "/images/RiceAndOthers/brownRice10.jpg" },
      { id: uuidv4(), name: "White Rice 1Kg", price: 29.99, image: "/images/RiceAndOthers/whiteRice1.webp" },
      { id: uuidv4(), name: "White Rice 25Kg", price: 29.99, image: "/images/RiceAndOthers/whiteRice25.jpeg" },
      { id: uuidv4(), name: "Sugar 1Kg", price: 29.99, image: "/images/RiceAndOthers/sugar.png" },
      { id: uuidv4(), name: "Salt 1kg", price: 29.99, image: "/images/RiceAndOthers/salt.jpg" },
      { id: uuidv4(), name: "Jaggery", price: 29.99, image: "/images/RiceAndOthers/jaggery.png" },
    ],
  };

  // Local state to keep track of quantities
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Default to 1 if not specified
    addToCart({ ...product, quantity });
    setQuantities((prev) => ({ ...prev, [product.id]: quantity })); // Update quantity state after adding to cart
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 1) - 1;
      return { ...prev, [id]: Math.max(1, newQuantity) }; // Prevent quantity from going below 1
    });
  };

  // Filter products based on the search query
  const filteredProducts = productsData.recommendedProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Nav/>
      <center>
        <h1>Rice And Others</h1>
      </center>
      <div className='product-grid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className='Home-products'>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className="gocart">
        <center>
        <Link to="/cart" className="gocart-button">Go to Cart</Link>
        </center>
      </div>
    </div>
  );
};

export default Rice;