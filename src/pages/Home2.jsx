import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSearch, FaStar } from 'react-icons/fa';
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
    name: "Accumsan tincidunt",
    price: 26.00,
    salePrice: 52.00,
    image: Image2,
    rating: 5,
    code: "PRD001"
  },
  {
    id: 2,
    name: "In nulla",
    price: 26.00,
    salePrice: 52.00,
    image: Image8,
    rating: 5,
    code: "PRD002"
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    price: 26.00,
    salePrice: 29.00,
    image: Image3,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD003"
  },
  {
    id: 4,
    name: "Sed at fermentum",
    price: 26.00,
    salePrice: 35.00,
    image: Image4,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD004"
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    price: 26.00,
    salePrice: 46.00,
    image: Image5,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD005"
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: 26.00,
    salePrice: 65.00,
    image: Image6,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD006"
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    price: 26.00,
    salePrice: 72.00,
    image: Image7,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD007"
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 53.00,
    image: Image1,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD008"
  },
  {
    id: 9,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 32.00,
    image: Image9,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD009"
  },
  {
    id: 10,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 20.00,
    image: Image10,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD010"
  },
  {
    id: 11,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 32.00,
    image: Image11,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD011"
  },
  {
    id: 12,
    name: "Ultrices mauris sit",
    price: 26.00,
    salePrice: 99.00,
    image: Image12,
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    code: "PRD012"
  }
];

const styles = {
  homeContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  viewOptions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  viewButton: {
    background: 'none',
    border: '1px solid #ddd',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'flex',
    gap: '2px',
  },
  activeViewButton: {
    backgroundColor: '#e0e0e0',
  },
  gridView: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  listView: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  listProduct: {
    display: 'flex',
    border: '1px solid #e0e0e0',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    transition: 'box-shadow 0.3s ease',
    gap: '30px',
  },
  listProductImage: {
    flex: '0 0 300px',
    height: '300px',
  },
  listProductDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  productName: {
    fontSize: '20px',
    color: '#151875',
    margin: '0 0 10px 0',
  },
  priceRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '15px',
  },
  price: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#151875',
  },
  salePrice: {
    color: '#FB2E86',
    fontWeight: 'bold',
  },
  rating: {
    display: 'flex',
    gap: '2px',
  },
  star: {
    color: '#FFC416',
  },
  description: {
    color: '#9295AA',
    lineHeight: 1.6,
    margin: '0',
  },
  productActions: {
    display: 'flex',
    gap: '10px',
  },
  actionButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'black',
    fontSize: '18px',
    transition: 'color 0.3s ease',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridProduct: {
    border: '1px solid #e0e0e0',
    padding: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  productActionsContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '10px',
   
    transition: 'opacity 0.3s ease',
  },
};

const Home2 = () => {
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(12);
  const [sortBy, setSortBy] = useState('best-match');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

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

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        style={{
          ...styles.star,
          color: index < rating ? '#FFC416' : '#E7E7E7'
        }}
      />
    ));
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

  const renderProduct = (product) => {
    if (viewMode === 'list') {
      return (
        <div 
          key={product.id} 
          style={styles.listProduct}
          onClick={() => handleProductClick(product)}
        >
          <div style={styles.listProductImage}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={styles.productImage}
            />
          </div>
          <div style={styles.listProductDetails}>
            <h3 style={styles.productName}>{product.name}</h3>
            <div style={styles.priceRating}>
              <div style={styles.price}>
                <span style={styles.originalPrice}>${product.price.toFixed(2)}</span>
                <span style={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
              </div>
              <div style={styles.rating}>
                {renderRatingStars(product.rating)}
              </div>
            </div>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
            </p>
            <div style={styles.productActions}>
              <button 
                style={styles.actionButton}
                onClick={(e) => handleAddToCart(product, e)}
              >
                <FaShoppingCart />
              </button>
              <button style={styles.actionButton}>
                <FaHeart />
              </button>
              <button style={styles.actionButton}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div 
        key={product.id} 
        style={styles.gridProduct}
        onClick={() => handleProductClick(product)}
      >
        <div style={{ position: 'relative' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={styles.productImage}
          />
          <div style={styles.productActionsContainer} className="product-actions">
            <button 
              style={styles.actionButton}
              onClick={(e) => handleAddToCart(product, e)}
            >
              <FaShoppingCart />
            </button>
            <button style={styles.actionButton}>
              <FaHeart />
            </button>
            <button style={styles.actionButton}>
              <FaSearch />
            </button>
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <h3 style={styles.productName}>{product.name}</h3>
          <div style={styles.price}>
            <span className='sale-price' style={styles.originalPrice}>${product.price.toFixed(2)}</span>
            <span className='sale-price' style={styles.salePrice}>${product.salePrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.homeContainer}>
      <div style={styles.header}>
        <h1 style={{color: '#151875'}}>Ecommerce Accessories & Fashion items</h1>
        <p>About 9,620 results (0.62 seconds)</p>
        <div className='filter-section' style={styles.filterSection}>
          <div>
            Per Page: 
            <input 
              type="number" 
              value={displayCount} 
              onChange={handleDisplayCountChange} 
              min="0"
              style={{ marginLeft: '10px', width: '60px', padding: '5px' }}
            />
          </div>
          <div>
            Sort By: 
            <select 
              value={sortBy} 
              onChange={handleSortChange}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="best-match">ozining xolati</option>
              <option value="price-low">Narxi arzondan qimatgacha</option>
              <option value="price-high">Narxi qimmatdan arzongacha</option>
            </select>
          </div>
          <div style={styles.viewOptions}>
            View: 
            <button   
              style={{
                ...styles.viewButton,
                ...(viewMode === 'grid' ? styles.activeViewButton : {})
              }}
              onClick={() => handleViewModeChange('grid')}
            >
              <span style={{ width: '8px', height: '8px', backgroundColor: '#666' }}></span>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#666' }}></span>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#666' }}></span>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#666' }}></span>
            </button>
            <button 
              style={{
                ...styles.viewButton,
                ...(viewMode === 'list' ? styles.activeViewButton : {})
              }}
              onClick={() => handleViewModeChange('list')}
            >
              <span style={{ width: '20px', height: '3px', backgroundColor: '#666', margin: '3px 0' }}></span>
              <span style={{ width: '20px', height: '3px', backgroundColor: '#666', margin: '3px 0' }}></span>
              <span style={{ width: '20px', height: '3px', backgroundColor: '#666', margin: '3px 0' }}></span>
            </button>
            <div className='search-bar'>
              <input 
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Nomi va Narxidan qidiring"
                style={{
                  padding: '8px',
                  width: '200px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginLeft: '10px'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={viewMode === 'list' ? styles.listView : styles.gridView}>
        {filteredProducts
          .slice(0, displayCount === 0 ? filteredProducts.length : displayCount)
          .map(renderProduct)}
      </div>
    </div>
  );
};

export default Home2;

