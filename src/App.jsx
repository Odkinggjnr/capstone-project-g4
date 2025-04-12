
import React from 'react'
import './index.css'
import { CartProvider } from './components/context/context.jsx'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import CustomerDets from './components/CustomerDets/CustomerDets'
import CategoryPage from './components/Category-Page/CategoryPage'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home' 
const App = () => {
  return (
    <div>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/customer-details' element={<CustomerDets />} />
          <Route path='/category-page' element={<CategoryPage />} />
          </Routes>
        </CartProvider>
    </div>
  );
};

export default App;
