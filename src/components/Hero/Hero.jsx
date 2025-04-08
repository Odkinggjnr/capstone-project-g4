// import React from 'react'
// import "./Hero.css"
// const Hero = () => {
    import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const siteNav = document.querySelector(".site-nav");
    const navIcon = document.querySelector(".nav-toggle");

    if (navIcon && siteNav) {
      navIcon.onclick = () => {
        siteNav.classList.toggle("nav-show");
      };
    }
  }, []);
  return (
  <div>
    <header className="site-header">
        <div className="brand-details">
            <div className="brand-head">
                <i className="fas fa-tshirt"></i>
                <h1 className="brand-name">Ab<div className="colored">Ck</div>
                </h1>
            </div>
            <h4 className="brand-tag">Fashion</h4>
        </div>
        <nav className="site-nav">
            <ul className="nav-wrap">
                <li><a href="#">Home</a></li>
                <li><a href="#">Brand</a>
                    <ol className="drop-down">
                        <li><a href="#">Gucci</a></li>
                        <li><a href="#">Chanel</a></li>
                        <li><a href="#">Louis Vuitton</a></li>
                        <li><a href="#">Versace</a></li>
                        <li><a href="#">Fendi</a></li>
                    </ol>
                </li>
                <li><a href="#">Category</a>
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
            <span className="nav-icon"><i className="fas fa-search"></i></span>
            <span className="nav-icon"><i className="fa fa-user"></i></span>
            <span className="nav-icon"><i className="fa fa-shopping-cart"></i>
                <p className="cart-label">0</p>
            </span>
        </div>
        <div className="nav-toggle"><i className="fa fa-bars"></i></div>
    </header>
    <main className="site-body">
        <section className="hero-section">
            <div className="hero-left">
                <h2 className="hero-title">STYLE THAT SPEAKS</h2>
                <p className="hero-text">Elevate your style with timless elegance.</p>
                <button className="hero-cta">Shop Now</button>
            </div>
            <div className="hero-right">
                <img src="./img/model.3.0.png" alt="" className="lazy-loading hero-image"/>
            </div>
        </section>
        <section className="category-section">
            <div className="category-card">
                <h3 className="category-title">Trendy Apparel</h3>
                <figure className="category-icon"><i className="fa fa-tshirt"></i></figure>
                <p className="category-text">Trendy Apparel Selection</p>
            </div>
            <div className="category-card">
                <h3 className="category-title">High Quality</h3>
                <figure className="category-icon"><i className="fa fa-check"></i></figure>
                <p className="category-text">Quality and Comfort Assured</p>
            </div>
            <div className="category-card">
                <h3 className="category-title">Free Delivery</h3>
                <figure className="category-icon"><i className="fa fa-truck"></i></figure>
                <p className="category-text">Personalized Service</p>
            </div>
        </section>
        <section className="product-section">
            <div className="section-header">
                <h3 className="section-title">FEATURED PRODUCTS</h3>
                <a href="#"><button className="section-btn">View all</button></a>
                <p className="section-subtitle">Discover Our Curated Selections</p>
            </div>
            <div className="product-wrap">
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/bag.1.jpg" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">20% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Women Vintage handbag</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(3.5)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$7000</h4>
                                    <del className="product-oldprice">$1000</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/f-cloth.6.jpg" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">40% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Sir. Adrien Asymmetric shirt - Green</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(4.0)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$20</h4>
                                    <del className="product-oldprice">$10</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/jewel.2.jpg" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">60% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Swarovski Earrings Rose Gold</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(4.1)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$95</h4>
                                    <del className="product-oldprice">$25</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/m-cloth.2.webp" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">45% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Zocha Men Printed Causual Green Shirt</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(3.3)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$50</h4>
                                    <del className="product-oldprice">25$</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/f-shoe.1.jpg" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">58% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Women High Heel Buckle</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(3.9)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$80</h4>
                                    <del className="product-oldprice">$50</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/m-watch.2.jpg" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">75% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Geneva Men's Analog Watch</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(4.6)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$1200</h4>
                                    <del className="product-oldprice">$90</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/t-shirt.1.webp" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">49% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Muscle Fit Stand Collar Shirt</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(4.6)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$75</h4>
                                    <del className="product-oldprice">$35</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                    <aside className="product-card">
                        <figure className="product-image">
                            <img src="./img/bag.5.webp" alt="" className="lazy-loading"/>
                            <figcaption className="product-brand">31% OFF</figcaption>
                        </figure>
                        <div className="product-info">
                            <h3 className="product-name">Cowhide Leather Women Handbag</h3>
                            <div className="product-mid">
                                <div className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <span className="product-score">(4.0)</span>
                                </div>
                                <div className="product-pricing">
                                    <h4 className="product-price">$60</h4>
                                    <del className="product-oldprice">$52</del>
                                </div>
                            </div>
                            <div className="product-base">
                                <button className="product-cart"><i className="fa fa-shopping-basket"></i> Add to Cart</button>
                                <span className="product-icon"><i className="fa fa-heart"></i></span>
                                <span className="product-icon"><i className="fa fa-share-alt"></i></span>
                            </div>
                        </div>
                    </aside>
                </div>
            <div className="product-wrap"></div>
        </section>
        <section className="about-us">
            <div className="container">
                <div className="about-us-container">
                        <div className="about-us-text">
                            <h2>ABOUT US</h2>
                            <p>We are a fashion e-commerece website dedicated to providing our customers with the latest trends and styles. Our mission is to make fashion accessible and affordable htmlFor everyone. we believe that fashion is a form of self-expression and that everyone deserves to look and feel their best.</p>
                        </div>
                        <div className="about-us-image">
                            <img src="./img/model.2.jpg" alt=""/>
                        </div>
                </div>
            </div>
        </section>
        <section className="faq-section">
            <div className="section-header">
                <h4 className="section-subtitle">Frequently Asked Questions</h4>
                <h3 className="section-title">WE GOT YOU COVERED</h3>
                <h4 className="section-subtitle">with precise, concise, yet detailed answers.</h4>
            </div>
            <div className="faq-wrap">
    <div className="faq-left">
        <aside className="faq-card">
            <label htmlFor="faq-1" className="faq-toggle">
                <div className="faq-head">
                    <h4 className="faq-title">What is your shipping policy?</h4>
                </div>
                <input type="checkbox" id="faq-1" className="faq-input" />
                <div className="faq-answer">
                    <div className="faq-btn"></div>
                    <p className="faq-text">
                        We offer standard and express shipping options. Standard shipping takes 3-7 business days, while express shipping takes 1-3 business days.
                    </p>
                </div>
            </label>
        </aside>
        <aside className="faq-card">
            <label htmlFor="faq-2" className="faq-toggle">
                <div className="faq-head">
                    <h4 className="faq-title">How do I contact customer service?</h4>
                </div>
                <input type="checkbox" id="faq-2" className="faq-input" />
                <div className="faq-answer">
                    <div className="faq-btn"></div>
                    <p className="faq-text">
                        You can contact us via email, phone or through our website's contact form.
                    </p>
                </div>
            </label>
        </aside>
        <aside className="faq-card">
            <label htmlFor="faq-3" className="faq-toggle">
                <div className="faq-head">
                    <h4 className="faq-title">Are your products authentic?</h4>
                </div>
                <input type="checkbox" id="faq-3" className="faq-input" />
                <div className="faq-answer">
                    <div className="faq-btn"></div>
                    <p className="faq-text">
                        Yes, we only sell authentic products from reputable brands.
                    </p>
                </div>
            </label>
        </aside>
    </div>
    <div className="faq-right"></div>
</div>

        </section>
    </main>
    <footer className="site-footer">
        <ul className="foot-links">
            <h3 className="foot-title">Quick Links</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul className="foot-links">
            <h3 className="foot-title">Follow Us</h3>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
        </ul>
        <ul className="foot-links">
            <h3 className="foot-title">Reach Out to Us</h3>
            <li><a href="#"><i className="fa fa-phone"></i> Give us a Call</a></li>
            <li><a href="#"><i className="fa fa-envelope"></i> Send us a Mail</a></li>
            <li><a target="_blank" href="#"><i className="fa fa-globe"></i> Our Partners</a></li>
            <li><a href="#"><i className="fa fa-scale-balanced"></i> Terms and Conditions</a></li>
        </ul>
        <small className="footer-base">&copy;2025. AbCk Fashion. All rights reserved.</small>
    </footer>

    </div>
  )
}
export default Hero