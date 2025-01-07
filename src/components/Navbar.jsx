import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import hekto from '../assets/Hekto.png';
import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart, FaSearch, FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  
    useEffect(() => {
      const updateCartItemCount = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItemCount(cartItems.length);
      };
  
      updateCartItemCount();
      window.addEventListener('storage', updateCartItemCount);
  
      return () => {
        window.removeEventListener('storage', updateCartItemCount);
      };
    }, []);
  return (
    <header className="navbar">
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>(12345)67890</span>
            </div>
          </div>
          
          <div className="user-actions">
            <select className="language-select">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            
            <select className="currency-select">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            
            <Link to="/login" className="user-action-link">
              <span>Login</span>
              <FaUser />
            </Link>
            
            <Link to="/wishlist" className="user-action-link">
              <span>Wishlist</span>
              <FaHeart />
            </Link>
            
            <Link to="/cart" className="cart-link">
                      <FaShoppingCart  />     
                    
            </Link>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container">
          <Link to="/" className="logo">
            <img src={hekto} alt="Hekto" />
          </Link>

          <nav className="nav-links">
            <div className="dropdown">
              <button 
                className="dropdown-toggle"
                onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
              >
                Home
                <FaChevronDown />
              </button>
              {isHomeDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/" className="dropdown-item">Home 1</Link>
                  <Link to="/home2" className="dropdown-item">shopping grid</Link>
                  <Link to="/home3" className="dropdown-item">home 3</Link>
                </div>
              )}
            </div>
            <Link to="/pages" className="nav-link">Pages</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

