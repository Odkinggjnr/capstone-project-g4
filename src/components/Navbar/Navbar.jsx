import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import AuthModal from './AuthModal';
import { useCart } from '../context/context';

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const user = localStorage.getItem('user');
    if (userToken) {
      setToken(userToken);
      setUserName(user ? JSON.parse(user).name : 'User');
    }
  }, []);
  const handleLogin = () => setShowLogin(true);
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    setToken(null);
    setUserName('');
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div>
      <header className="site-header">
      <div className="brand-details">
        <div className="brand-head">
          <i className="fas fa-tshirt"></i>
          <h1 className="brand-name">
            Chic<div className="colored">Aura</div>
          </h1>
        </div>
        <h4 className="brand-tag">Fashion</h4>
      </div>

      <nav className="site-nav">
        <ul className="nav-wrap">
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">Brand</a>
            <ol className="drop-down">
              <li><a href="#">Gucci</a></li>
              <li><a href="#">Chanel</a></li>
              <li><a href="#">Louis Vuitton</a></li>
              <li><a href="#">Versace</a></li>
              <li><a href="#">Fendi</a></li>
            </ol>
          </li>
          <li>
            <a href="#">Category</a>
            <ol className="drop-down">
              <li><a href="#">Women's</a></li>
              <li><a href="#">Men's</a></li>
              <li><a href="#">Kid's</a></li>
            </ol>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="nav-extra">
        <span className="nav-icon search-icon"><i className="fas fa-search"></i></span>
        <span className="nav-icon"><i className="fa fa-user"></i></span>
        <span className="nav-icon">
          <i className="fa fa-shopping-cart"></i>
          <p className="cart-label">0</p>
        </span>
      </div>

      <div className="nav-toggle"><i className="fa fa-bars"></i></div>
    </header>

      {showLogin && (
        <AuthModal
          closeModal={() => setShowLogin(false)}
          setToken={setToken}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default Navbar;

