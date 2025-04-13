import React from 'react'
const Footer = () => {
  return (
    <div>
       <footer id="site-footer">
        <ul className="foot-links">
            <h3 className="foot-title">Quick Links</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <ul className="foot-links">
            <h3 className="foot-title">Follow Us</h3>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://whatsapp.com"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
        </ul>
        <ul className="foot-links">
            <h3 className="foot-title">Reach Us</h3>
            <li><a href="#"><i className="fa fa-phone"></i> Give us a Call</a></li>
            <li><a href="https://gmail.com"><i className="fa fa-envelope"></i> Send us a Mail</a></li>
        </ul>
        <small className="footer-base">&copy;2025. ChicAura Fashion. All rights reserved.</small>
    </footer>
    </div>
  )
}

export default Footer
