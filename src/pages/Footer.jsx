import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import '../components/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Hekto Section */}
          <div className="footer-section">
            <h2 className="footer-logo">Hekto</h2>
            <form className="footer-form">
              <div className="footer-input-group">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="footer-input"
                />
                <button type="submit" className="footer-button">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="footer-contact-info">
              <p>Contact Info</p>
              <p className="footer-address">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-heading">Catagories</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Laptops & Computers</a></li>
              <li><a href="#" className="footer-link">Cameras & Photography</a></li>
              <li><a href="#" className="footer-link">Smart Phones & Tablets</a></li>
              <li><a href="#" className="footer-link">Video Games & Consoles</a></li>
              <li><a href="#" className="footer-link">Waterproof Headphones</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="footer-section">
            <h3 className="footer-heading">Customer Care</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">My Account</a></li>
              <li><a href="#" className="footer-link">Discount</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Orders History</a></li>
              <li><a href="#" className="footer-link">Order Tracking</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="footer-section">
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Browse the Shop</a></li>
              <li><a href="#" className="footer-link">Category</a></li>
              <li><a href="#" className="footer-link">Pre-Built Pages</a></li>
              <li><a href="#" className="footer-link">Visual Composer Elements</a></li>
              <li><a href="#" className="footer-link">WooCommerce Pages</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">©Webecy - All Rights Reserved</p>
          <div className="footer-social">
            <a href="#" className="social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
