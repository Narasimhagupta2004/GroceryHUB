import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
import Nav from './Nav';
import './Oils.css';

const Oils = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const { searchQuery } = useSearch(); // Get the search query from SearchContext
  console.log("Oils component rendered");

  const productsData = {
    recommendedProducts: [
      { id: uuidv4(), name: "Palm Oil 1-Lit", price: 29.99, image: "/images/OilsAndGhee/pm1.jpg" },
      { id: uuidv4(), name: "Palm Oil 15-Lit", price: 24.99, image: "/images/OilsAndGhee/pm2.jpg" },
      { id: uuidv4(), name: "Sunflower Oil 1-Lit", price: 19.99, image: "/images/OilsAndGhee/sf1.png" },
      { id: uuidv4(), name: "Sunflower Oil 5-Lit", price: 34.99, image: "/images/OilsAndGhee/sf2.png" },
      { id: uuidv4(), name: "RiceBrand Oil 1-Lit", price: 39.99, image: "/images/OilsAndGhee/rb1.png" },
      { id: uuidv4(), name: "RiceBrand Oil 5-Lit", price: 22.99, image: "/images/OilsAndGhee/rb2.png" },
      { id: uuidv4(), name: "Ground Nut Oil 1-Lit", price: 26.99, image: "/images/OilsAndGhee/gn1.png" },
      { id: uuidv4(), name: "Ground Nut Oil 5-Lit", price: 18.99, image: "/images/OilsAndGhee/gn2.png" },
      { id: uuidv4(), name: "Olive Oil 5-Lit", price: 18.99, image: "/images/OilsAndGhee/oliveoil.webp" },
      { id: uuidv4(), name: "Mustard Oil 1-Lit", price: 18.99, image: "/images/OilsAndGhee/mustardOil.png" },
      { id: uuidv4(), name: "Aachi Ghee 200ml", price: 18.99, image: "/images/OilsAndGhee/ghee1.png" },
      { id: uuidv4(), name: "Aachi Ghee 500ml", price: 18.99, image: "/images/OilsAndGhee/ghee2.png" },
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
        <h1>Edible Oils & Ghee</h1>
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

export default Oils;



// // src/components/Pages/Oils.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs
// import { useCart } from '../../contexts/CartContext'; // Ensure this path is correct
// import { useSearch } from '../../contexts/SearchContext'; // Ensure this path is correct
// import Nav from './Nav';
// import './Oils.css';

// const Oils = () => {
//   const { addToCart } = useCart(); // Get the addToCart function from CartContext
//   const { searchQuery } = useSearch(); // Get the search query from SearchContext
//   console.log("Oils component rendered");

//   const productsData = {
//     recommendedProducts: [
//       { id: uuidv4(), name: "Palm Oil 1-Lit", price: 29.99, image: "/images/OilsAndGhee/pm1.jpg" },
//       { id: uuidv4(), name: "Palm Oil 15-Lit", price: 24.99, image: "/images/OilsAndGhee/pm2.jpg" },
//       { id: uuidv4(), name: "Sunflower Oil 1-Lit", price: 19.99, image: "/images/OilsAndGhee/sf1.png" },
//       { id: uuidv4(), name: "Sunflower Oil 5-Lit", price: 34.99, image: "/images/OilsAndGhee/sf2.png" },
//       { id: uuidv4(), name: "RiceBrand Oil 1-Lit", price: 39.99, image: "/images/OilsAndGhee/rb1.png" },
//       { id: uuidv4(), name: "RiceBrand Oil 5-Lit", price: 22.99, image: "/images/OilsAndGhee/rb2.png" },
//       { id: uuidv4(), name: "Ground Nut Oil 1-Lit", price: 26.99, image: "/images/OilsAndGhee/gn1.png" },
//       { id: uuidv4(), name: "Ground Nut Oil 5-Lit", price: 18.99, image: "/images/OilsAndGhee/gn2.png" },
//       { id: uuidv4(), name: "Olive Oil 5-Lit", price: 18.99, image: "/images/OilsAndGhee/oliveoil.webp" },
//       { id: uuidv4(), name: "Mustard Oil 1-Lit", price: 18.99, image: "/images/OilsAndGhee/mustardOil.png" },
//       { id: uuidv4(), name: "Aachi Ghee 200ml", price: 18.99, image: "/images/OilsAndGhee/ghee1.png" },
//       { id: uuidv4(), name: "Aachi Ghee 500ml", price: 18.99, image: "/images/OilsAndGhee/ghee2.png" },
//     ],
//   };

//   // Local state to keep track of quantities
//   const [quantities, setQuantities] = useState({});

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.id] || 1; // Default to current quantity or 1 if not specified
//     addToCart({ ...product, quantity });
//     setQuantities((prev) => ({ ...prev, [product.id]: quantity })); // Update quantity state after adding to cart
//   };

//   const handleIncrement = (id) => {
//     setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 })); // Corrected syntax here
//   };

//   const handleDecrement = (id) => {
//     setQuantities((prev) => {
//       const newQuantity = (prev[id] || 1) - 1;
//       return { ...prev, [id]: Math.max(1, newQuantity) }; // Prevent quantity from going below 1
//     });
//   };

//   // Filter products based on the search query
//   const filteredProducts = productsData.recommendedProducts.filter(product =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <Nav />
//       <center>
//         <h1>Edible Oils & Ghee</h1>
//       </center>
//       <div className='product-grid'>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className='Home-products'>
//               <img src={product.image} alt={product.name} />
//               <h4>{product.name}</h4>
//               <p>Price: ${product.price.toFixed(2)}</p>
//               <div className="quantity-controls">
//                 <button onClick={() => handleDecrement(product.id)}>-</button>
//                 <span>{quantities[product.id] || 1}</span>
//                 <button onClick={() => handleIncrement(product.id)}>+</button>
//               </div>
//               <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//       <div className="gocart">
//         <center>
//           <Link to="/cart" className="gocart-button">Go to Cart</Link>
//         </center>
//       </div>
//     </div>
//   );
// };

// export default Oils;