import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import '../components/Home2.css';
// Import rasmlarni
import Image1 from '../assets/image1164.png';
import Image2 from '../assets/image9.png';
import Image3 from '../assets/badbackk.png';
import Image4 from '../assets/badback(1).png';
import Image5 from '../assets/unnamed1.png';
import Image6 from '../assets/watches (1).png';
import Image7 from '../assets/purepng 1.png';
import Image8 from '../assets/image 1165.png';
import Image9 from '../assets/resbad 2.png';
import Image10 from '../assets/cam 2.png';
import Image11 from '../assets/headhphone1.png';
import Image12 from '../assets/badback(1).png';

const products = [
  {
    id: 1,
    name: "Vel elit euismod",
    price: 26.00,
    salePrice: 15.00,
    image: Image2,
    rating: 3,
    code: "PRD001"
  },
  {
    id: 2,
    name: "Ultricies condimentum imperdiet",
    price: 26.00,
    salePrice: 25.00,
    image: Image8,
    rating: 3,
    code: "PRD002"
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    price: 26.00,
    salePrice: 29.00,
    image: Image3,
    rating: 3,
    code: "PRD003"
  },
  {
    id: 4,
    name: "Sed at fermentum",
    price: 26.00,
    salePrice: 35.00,
    image: Image4,
    rating: 3,
    code: "PRD004"
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    price: 26.00,
    salePrice: 46.00,
    image: Image5,
    rating: 3,
    code: "PRD005"
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: 26.00,
    salePrice: 65.00,
    image: Image6,
    rating: 3,
    code: "PRD006"
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    price: 26.00,
    salePrice: 72.00,
    image: Image7,
    rating: 3,
    code: "PRD007"
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 53.00,
    image: Image1,
    rating: 3,
    code: "PRD008"
  },
  {
    id: 9,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 32.00,
    image: Image9,
    rating: 3,
    code: "PRD009"
  },
  {
    id: 10,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 20.00,
    image: Image10,
    rating: 3,
    code: "PRD010"
  },
  {
    id: 11,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 32.00,
    image: Image11,
    rating: 3,
    code: "PRD011"
  },
  {
    id: 12,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 99.00,
    image: Image12,
    rating: 3,
    code: "PRD012"
  }
];

const Home2 = () => {
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(12);
  const [sortBy, setSortBy] = useState('best-match');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...existingCartItems, {
      name: product.name,
      price: product.salePrice,
      image: product.image,
      code: product.code
    }];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    navigate('/cart');
  };

  const handleDisplayCountChange = (event) => {
    const count = parseInt(event.target.value, 10);
    setDisplayCount(count);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProductClick = (product) => {
    localStorage.setItem('products', JSON.stringify(products));
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    let sorted = [...products];
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.salePrice - a.salePrice);
    }

    const filtered = sorted.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.salePrice.toString().includes(searchTerm)
    );

    setFilteredProducts(filtered);
  }, [sortBy, searchTerm]);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Ecommerce Accessories & Fashion items</h1>
        <div className="filter-section">
          <div className="per-page">
            Per Page: <input 
              type="number" 
              value={displayCount} 
              onChange={handleDisplayCountChange} 
              min="0"
            />
          </div>
          <div className="sort">
            Sort By: 
            <select value={sortBy} onChange={handleSortChange}>
              <option value="best-match">ozining xolati</option>
              <option value="price-low">Narxi arzondan qimatgacha</option>
              <option value="price-high">Narxi qimmatdan arzongacha</option>
            </select>
          </div>
          <div className="view-options">
            View: 
            <button className="grid-view active">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="list-view">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="manny">
              <input 
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Nomi va Narxidan qidiring"
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.slice(0, displayCount === 0 ? filteredProducts.length : displayCount).map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-actions">
                <button 
                  className="action-button"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <FaShoppingCart />
                </button>
                <button className="action-button">
                  <FaHeart />
                </button>
                <button className="action-button">
                  <FaSearch />
                </button>
              </div>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="rating">
                {[...Array(product.rating)].map((_, index) => (
                  <span key={index} className="rating-dot"></span>
                ))}
              </div>
              <div className="price">
                <span className="original">${product.price.toFixed(2)}</span>
                <span className="sale">${product.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;
