import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/context.jsx';
import './index.css';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import CategoryPage from './components/Category-Page/CategoryPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CustomerDets from './components/CustomerDets/CustomerDets.jsx';
const App = () => {
  return (
    <CartProvider> 
       <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category-page" element={<CategoryPage />} />
         <Route path="/customer-details" element={<CustomerDets />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
