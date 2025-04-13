import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
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

  const handleLogin = () => {
    setShowLogin(true);
  };


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
              Chic<span className="colored">Aura</span>
            </h1>
          </div>
          <h4 className="brand-tag">Fashion</h4>
        </div>

        <nav className={`site-nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-wrap">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category-page">Brand</Link>
              <ol className="drop-down">
                <li><a href="#">Gucci</a></li>
                <li><a href="#">Chanel</a></li>
                <li><a href="#">Louis Vuitton</a></li>
                <li><a href="#">Versace</a></li>
                <li><a href="#">Fendi</a></li>
              </ol>
            </li>
            <li><Link to="/category-page">Category</Link>
              <ol className="drop-down">
                <li><a href="#">Women's</a></li>
                <li><a href="#">Men's</a></li>
                <li><a href="#">Kid's</a></li>
              </ol>
            </li>
            <li><a href="#site-footer">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-extra">
          <span className="nav-icon"><i className="fas fa-search"></i></span>

          {token && (
            <span className="nav-icon">
              <Link to="/cart">
                <FaShoppingCart style={{ fontSize: '2.5rem', width: '20px', color: '#fff' }} />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </Link>
            </span>
          )}

          {!token ? (
            <button className="nav-button" onClick={handleLogin}>Sign In</button>
          ) : (
            <div className="navbar-profile">
              <FaUser className="fa-icon-user" />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate('/myorders')}>
                  <FaShoppingCart style={{ fontSize: '1.5rem', width: '20px' }} />
                  Orders
                </li>
                <hr />
                <li onClick={handleLogout}>
                  <FaSignOutAlt style={{ fontSize: '1.5rem', width: '20px' }} />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="nav-toggle" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </div>
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
