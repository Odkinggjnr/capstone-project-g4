import React, { useState } from 'react';
import { useCart } from '../context/context.jsx';
import './FeaturedProducts.css'; 
const productsData = [
  {
    id: 1,
    name: 'Women Vintage Handbag',
    image: './img/bag.1.jpg',
    price: 7000,
    oldPrice: 1000,
    discount: '20% OFF',
    rating: 3.5,
  },
  {
    id: 2,
    name: 'Sir. Adrien Asymmetric Shirt - Green',
    image: './img/f-cloth.6.jpg',
    price: 20,
    oldPrice: 10,
    discount: '40% OFF',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Swarovski Earrings Rose Gold',
    image: './img/jewel.2.jpg',
    price: 95,
    oldPrice: 25,
    discount: '60% OFF',
    rating: 4.1,
  },
  {
    id: 4,
    name: 'Zocha Men Printed Casual Green Shirt',
    image: './img/m-cloth.2.webp',
    price: 50,
    oldPrice: 25,
    discount: '45% OFF',
    rating: 3.3,
  },
  {
    id: 5,
    name: 'Women High Heel Buckle',
    image: './img/f-shoe.1.jpg',
    price: 80,
    oldPrice: 50,
    discount: '58% OFF',
    rating: 3.9,
  },
  {
    id: 6,
    name: 'Geneva Men\'s Analog Watch',
    image: './img/m-watch.2.jpg',
    price: 1200,
    oldPrice: 90,
    discount: '75% OFF',
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Muscle Fit Stand Collar Shirt',
    image: './img/t-shirt.1.webp',
    price: 75,
    oldPrice: 35,
    discount: '49% OFF',
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Cowhide Leather Women Handbag',
    image: './img/bag.5.webp',
    price: 60,
    oldPrice: 50,
    discount: '31% OFF',
    rating: 4.0,
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div>
      {showNotification && (
        <div className="notification">
          <p>Item added to cart!</p>
        </div>
      )}
      
      <section id="product-section">
        <div className="section-header">
          <h3 className="section-title">FEATURED PRODUCTS</h3>
          <a href="#">
            <button className="section-btn">View all</button>
          </a>
          <p className="section-subtitle">Discover Our Curated Selections</p>
        </div>

        <div className="product-wrap">
          {productsData.map((product) => (
            <aside key={product.id} className="product-card">
              <figure className="product-image">
                <img src={product.image} alt={product.name} className="lazy-loading" />
                <figcaption className="product-brand">{product.discount}</figcaption>
              </figure>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-mid">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <span className="product-score">({product.rating})</span>
                  </div>
                  <div className="product-pricing">
                    <h4 className="product-price">${product.price}</h4>
                    <del className="product-oldprice">${product.oldPrice}</del>
                  </div>
                </div>
                <div className="product-base">
                  <button
                    className="product-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fa fa-shopping-basket"></i> Add to Cart
                  </button>
                </div>
              </div>
            </aside>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
