import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
