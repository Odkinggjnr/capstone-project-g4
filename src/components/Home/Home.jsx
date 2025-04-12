// import React from 'react'
 import "./Home.css"
// const Hero = () => {
    import { useEffect } from "react";
import Category from "../Category/Category";
import FeaturedProducts from "../featured-products/FeaturedProducts";
import Footer from "../Footer/Footer";
const Home = () => {
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
        <Category/>
      
              <FeaturedProducts/>
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
         <Footer/>
    </div>
  )
}
export default Home