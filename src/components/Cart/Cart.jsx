import React from 'react';
import { useCart } from '../context/context';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();  // Initialize the navigate function

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  // Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    // Navigate to the customer details page
    navigate('/customer-details');  // Adjust this path to your actual customer details page
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Display the total number of items in the cart */}
          <p>Total Items: {totalItems}</p>

          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="cart-item-image">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <span>{item.name}</span>
                  </td>
                  <td className="cart-item-price">${item.price}</td>
                  <td className="cart-item-discount">
                    {item.discount ? `${item.discount}%` : 'No Discount'}
                  </td>
                  <td className="cart-item-quantity">{item.quantity}</td>
                  <td className="cart-item-remove">
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p><strong>Total Price: ${totalPrice}</strong></p>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <button className="checkout-btn" onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
