'use client'

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

import '../components/TrendingProducts.css';
// Import images
import chair1 from '../assets/sss.png';
import chair2 from '../assets/sss.png';
import chair3 from '../assets/sss.png';
import chair4 from '../assets/sss.png';
import clock from '../assets/sss.png';
import cabinet from '../assets/sss.png';
import sideChair1 from '../assets/sss.png';
import sideChair2 from '../assets/sss.png';
import sideChair3 from '../assets/sss.png';

const TrendingProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [mainProducts, setMainProducts] = useState([
    {
      id: 1,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: chair1,
      description: "Modern design cantilever chair with comfortable seating",
      isFavorite: false
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: chair2,
      description: "Classic red cantilever chair perfect for any room",
      isFavorite: false
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: chair3,
      description: "Elegant white cantilever chair with modern design",
      isFavorite: false
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: chair4,
      description: "Sophisticated black cantilever chair with unique style",
      isFavorite: false
    }
  ]);

  const sideProducts = [
    {
      id: 5,
      name: "Executive Seat chair",
      price: 32.00,
      image: sideChair1
    },
    {
      id: 6,
      name: "Executive Seat chair",
      price: 32.00,
      image: sideChair2
    },
    {
      id: 7,
      name: "Executive Seat chair",
      price: 32.00,
      image: sideChair3
    }
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setMainProducts(prevProducts => 
      prevProducts.map(product => ({
        ...product,
        isFavorite: savedFavorites[product.id] || false
      }))
    );
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    localStorage.setItem('cartCount', updatedCart.length);

    // Show toast notification
    toast.success("Mahsulot savatga qo'shildi!", {
      duration: 3000,
      position: "top-right",
    });
  };

  const toggleFavorite = (productId) => {
    setMainProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );

    const updatedFavorites = mainProducts.reduce((acc, product) => {
      if (product.id === productId) {
        acc[product.id] = !product.isFavorite;
      } else if (product.isFavorite) {
        acc[product.id] = true;
      }
      return acc;
    }, {});

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="trend-container">
      <Toaster /> {/* Add Toaster for notifications */}
      <h2 className="trending-title">Trending Products</h2>

      <div className="trend-anordnung">
        <div className="haupt-produkte">
          {mainProducts.map((product) => (
            <div key={product.id} className="produkt-karte">
              <div className="produkt-bild">
                <img src={product.image} alt={product.name} />
                <div className="produkt-aktionen">
                  <button 
                    className="aktion-knopf"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <button 
                    className={`aktion-knopf ${product.isFavorite ? 'favorit' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart size={20} fill={product.isFavorite ? "currentColor" : "none"} />
                  </button>
                  <button 
                    className="aktion-knopf"
                    onClick={() => openModal(product)}
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>
              <h3 className="produkt-name">{product.name}</h3>
              <div className="produkt-preis">
                <span className="aktueller-preis">${product.price.toFixed(2)}</span>
                <span className="alter-preis">${product.oldPrice.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="seiten-inhalt">
          <div className="promo-bereich">
            <div className="promo-karte rosa">
              <h3>23% off in all products</h3>
              <a href="#" className="shop-link">Shop Now</a>
              <img src={clock} alt="Clock" className="promo-bild" />
            </div>
            <div className="promo-karte lila">
              <h3>23% off in all products</h3>
              <a href="#" className="shop-link">View Collection</a>
              <img src={cabinet} alt="Cabinet" className="promo-bild" />
            </div>
          </div>

          <div className="seiten-produkte">
            {sideProducts.map((product) => (
              <div 
                key={product.id} 
                className="seiten-produkt-karte"
                onClick={() => openModal(product)}
              >
                <img src={product.image} alt={product.name} />
                <div className="seiten-produkt-info">
                  <h4>{product.name}</h4>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-inhalt" onClick={e => e.stopPropagation()}>
            <button className="modal-schliessen" onClick={closeModal}>&times;</button>
            <div className="modal-produkt">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="modal-produkt-info">
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.description}</p>
                <p className="modal-preis">
                  <span className="aktueller-preis">${selectedProduct.price.toFixed(2)}</span>
                  {selectedProduct.oldPrice && (
                    <span className="alter-preis">${selectedProduct.oldPrice.toFixed(2)}</span>
                  )}
                </p>
                <div className="modal-aktionen">
                  <button 
                    className="aktion-knopf"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(selectedProduct);
                    }}
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <button 
                    className={`aktion-knopf ${selectedProduct.isFavorite ? 'favorit' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(selectedProduct.id);
                    }}
                  >
                    <Heart size={20} fill={selectedProduct.isFavorite ? "currentColor" : "none"} />
                  </button>
                </div>
                <button 
                  className="zum-warenkorb-hinzufuegen"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    closeModal();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
