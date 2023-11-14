// Cart.js
import React from 'react';

const Cart = () => {
  // Assuming you have a state to manage cart items
  const cartItems = []; // replace with your actual cart state

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
