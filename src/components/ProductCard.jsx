import React, { useState, useContext } from "react";
import { CartContext } from "../components/context/context";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  
  const [notification, setNotification] = useState("");

  
  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {/* Notification Display */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <button className="add" onClick={() => handleAddToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
