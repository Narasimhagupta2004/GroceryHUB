import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css'; // Include any necessary styling
import Nav from './Pages/Nav';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart(); // Get necessary functions

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Nav />
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: 
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button onClick={() => incrementQuantity(item.id)}>+</button>
                    </p>
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;