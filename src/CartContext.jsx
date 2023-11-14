// // CartContext.js
// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   const addToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   // You can add more functions for updating the cart, like removing items, etc.

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     // Add more cases for other actions if needed
//     default:
//       return state;
//   }
// };
