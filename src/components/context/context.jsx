import React, { createContext, useState, useContext } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider component to wrap your app and provide cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // If product exists, update quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    alert('Item removed from cart');
  };

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const value = { cart, addToCart, removeFromCart, totalItems };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
