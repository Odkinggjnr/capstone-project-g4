import React, { useState } from 'react';
import './Navbar.css';

const AuthModal = ({ closeModal, setToken, setUserName }) => {
  const [isSignUp, setIsSignUp] = useState(false); // toggle between login/signup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();

    const userData = {
      name: isSignUp ? name : 'John Doe', // use entered name or fallback
      email,
    };

    localStorage.setItem('userToken', 'exampleToken');
    localStorage.setItem('user', JSON.stringify(userData));
    setToken('exampleToken');
    setUserName(userData.name);

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleAuth}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>

        <p className="auth-toggle">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>

        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
