
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProductDetail from './Product';
import Login from './Login';
import Contact from './Contact';
import Cart from './Cart';
// import { CartProvider } from './CartContext';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <Router>
      <div>
        
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      
    </Router>
    
  );
};

export default App;
