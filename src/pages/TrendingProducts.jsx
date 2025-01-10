'use client'

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

import '../components/TrendingProducts.css';
// Import images
import chair1 from '../assets/time.png';

import chair2 from '../assets/jako.png';
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
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQil318vQLI7LJSOhnUnYphFtCQXHv703ts6YcbkOmaXrmuvF81',
      description: "Modern design cantilever chair with comfortable seating",
      isFavorite: false
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: 'data:image/jpeg;base64,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',
      description: "Classic red cantilever chair perfect for any room",
      isFavorite: false
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: 'data:image/jpeg;base64,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',
      description: "Elegant white cantilever chair with modern design",
      isFavorite: false
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: 26.00,
      oldPrice: 42.00,
      image: 'data:image/jpeg;base64,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',
      description: "Sophisticated black cantilever chair with unique style",
      isFavorite: false
    }
  ]);

  const sideProducts = [
    {
      id: 5,
      name: "Executive Seat chair",
      price: 32.00,
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 6,
      name: "Executive Seat chair",
      price: 32.00,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSExISFRUXFRcXFRYXFxUXFxYVFxUWFhUXFxUYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0eHSUtKysuLSsuMi0tLS0tMCsrLS0tLS0tKystLS0tKy0tLS0tLS0tLS0tLS0tLSsrNy0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAEQQAAIBAgIFBwgIAwgDAAAAAAABAgMRBBIFBiExUUFhcZGhscEHEyJSgZLC0RUjMkJyouHwQ4KTFDNTYmOy4vEWF9L/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIEA//EACQRAQEAAgEEAwACAwAAAAAAAAABAgMREiExQQQTIjJRFDNx/9oADAMBAAIRAxEAPwD3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsnUit7S6WkBeDA8XT9eHvIqsVT9eHvIDMDGq8HulHrRepICoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK1TLFy4IjtR3bb3nW0tU9FR4vb0L9bdRyCmVWkY3EWLijKrLWimVFQ2BTM1yvrZeq0/Xmv5pFhQDL/AGup68/eZVY6r68jXKNjk4bf0rWX379KXyOjozSbm8s0k2rprl9hHm7s3dGu9aC532RZMt5RYlAAOigAAAAAAAAAAAAAAAAAAABRsDjaTqXm+ay8fE0pGSpK7bfK2+sxyOVdFjZQq2WsgLgoNoFblrKlrYFrLGy6TMUmEroG/q+r1m+EW+tpfM5qdkzs6q0/7yXOo9W196Jx8ovh3wAdXMAAAAAAAAAAAGvj6Mp05Rja7Vtu7nItjNE4ilBzWXY19iVnvS5Uimedx9cr4YzL3wmIIRg8fiJyyQlUct9rvk37b2N/+0Y6P3anuqXzOM+RLOeKvdNnuJQCLfTWJj9qD/mg13WKx1okt8I9q72W/wAnD32R9OXpKDBjp2py6Ldew4sNaYcsOqV/AxYjWOlV+rjmUvtO9t27k5+4tN2GXaVF15TzFWWMo5lrZAFAWsC4oUKNgVZY2CkgKSkY5iTLJBK2bsiT6tU7UE/Wcn22XYkRSvMnOBpZKcI8Ipe220tgrkzgA6KAAAAAAAAAAAGhpmpan++RNm+cLWiraFubvaRz23jG1fXOco5uqdL66UuEH2tfqS8juqUP7yX4V3kiKfGnGuL77zmFs6cXvSfSrlwO7i1amjaD30qb/lj32IRjNHqlXqWX3nb8N20ujaegkW0ms1ST5+7Z4HPPGeV8cr4alKpsMtzXUbF0ZFVmxcpmLFIrmCCo3Z24bOoi2kcd5l+nOpDbyZ2r2v8AdumSi5wdY8MptJ8f0OO7xy7afPDYweLqOEZWm80U/syd01e90uHE2FiuLt0o2acVGKXIkl1KxScxNVnjKouyX0x501sd+gxSqW5LmLF1VwT/AHzkR0tiKua8ZSik02lJpWvZ7hljnJ5TLjb4SuEvTi5fZzJy45b7SZYfWLDTnGCnaU3aMWmm3wR5DjcViI5ZU6s1FpOzs929ekmz1ijq1hvOU66z5oXcLyulmSvycyGnLZb6RtxwjuAA2MwAAAAAAAAAWVqiinJ7kBeRbWmr6Vuddx0KukZvd6K/fKak5X2va+L2nHbOvHiOuu9N5bOqiXmXLjN9iS+Z2HVj60etEeuUdicPzjIrl3tqRedj6y60XKS4kZZSyL9SvCTylZN8CMVecrfnZa0Re6Z2acyw3JUlwMcqC5yvC3LApFc4nTS4mGUkuW3sIS2Yu7XSjlaUmnVUejvN+hL0ltXK+xnOrQvVzc67OQz7+/EdtPuuk5GKbGZFjZocWnjGczE4W8Jripdx1apaoKyIqYj6s4L97GkexaKqZqNKXGnB9cUeMUNiceCivanJPuPXNVqubCUX/kS91uPgcfjfysdfkT8yuqADayAAAAAAAABztM1LRiuL7v8As6JxdP1EnFcz70Rl4TPLnOoUdQ15VkXecRzXZvOFvnDG5bCxyAy+cZdnNbPtK5wNjOy7OaykXKYGxnKOoYHMsnUCOGWpWju5TDOlfejTdVZvZvL5V2QlqyU6VaKv9XKMtnKpJxty7mm+oqvSqdb7P1NTGVc1aC9VO/8ANKNv9kjJTq5ZNmbPvskaMe2FroOkzHKEuS5qvH84+kOk0cuCytOSaTVrv2N9JlzGCWMUlZ8v7XaZMKs9SEPWlGPW0gI/jqTpYmrSe/f71qnxHp+ok74OC4Smvzyfief6/wBLJpOT9enGX5MnwE18nFS+GkuFV9sYM46u26z/AK7be+qVKwAbWQAAAAAAAANXF6PpVWnOOZpNLa1sfQzaAEe01oyhTheMLP8AFLck3x6Dz/VnSFevGpOcrpTahZJbOe28nmvWJyYeo72tTnbpasjz3yXqVac8OklFQlUz3e/PGKjl58zd7/dMmy5XPjFq1zHo5rs4jGVIrian01Nb49v6EvxOrNR7E6bXO5L4WactSJvfVgvZJ/InjYc60fWm1dXjLsNj6ZpviulfI6//AID/AK6/p/8AItlqDLkrr+m//onjZ/SOdf8AbnU9KU2/tJdOzvNmni4t7GmUxGoeI+7VpS6c0e5M52J1SxkP4eZcYyi+y9+wc5zzEdOF8V1nVRZOoiLVaGJpPLLzkHweZPqZa8diFy36UiPtntP1X0kCltbLJVLnD+kqr5Fd77X+Zp4rSVdbFFdvzH2Yo+vJ3aW2q3wsupN/EXx4/PwNPQqkqbnJ3lLM7+2y7LHe0Rq9PEwc41IwSlls03eyTvsa4mbKZZZfl3nGOP6cuSjv3e1mnia6W4lb1Gq/48PcfzMU/J/Uf8ePUx9W5M2av7QqWMcXsSZt6P0xOnUjUUYuUXdJ3cb25bbeUksvJ5U5KtPqkY//AF7X/wAWj+f5EzDfE3PRUd1l0jUxVWFapGMZRjltC9mk3LbfpZMfJhV9CvHhKEvei18JGNZ9A1cFGE6jhOMpZEoXveze26XBnd8mNT6ytHjCD6m18RfV1Tb+vKm3pur8+HoQAN7CAAAAAAAAAACAeVKu/MziuEU/a7s5nkUw23E1OalBfnlLviX+VSr6NuNRL3UdbyQ4bLg5z9evN+yMYQ74szY99jTl21pyADSzAAAAACH6/Ye+SS3uM4+1Wce9nG1L0RRxdKoqjlnjNWkntyyjsTTuntT5yWa4Ur0FL1Zxfsd4+KI35N6mXEYilxin7k2vjMtk+3i+2iW/XzGXE6kVI3cJRmuD9F99u05WM1axC30Z+z0v9tz1EHS6MVZvyeV16ThTtZ3slbc72u12Ey1BzPBU5TjllK8pR4O9muwiumZXa55N+PiTnVqFsNS545vebl4nHT/srpuv4jpgA2MoAAIl5T6GbBZvUqwl13h8RHfJtUtimvWoyXtTg/Bkz13o58DXXCGb3JKfgef6g1bYyjzqa/I7eBl29tsrTr76rHrgANTMAAAAAAAAAFlWVot8E31AeReUnEZpwXGcpdpPfJ3hvN6Ow64xlP8AqTlP4jzDXmresl6sO/8A7PZ9EYbzVClT9SnCPuxS8DNo75WtG7tJG2ADSzgAAAADXx+EjWpypyvaS5N623TXtRxtBarxw9apXdRzlJZYpLKoxeW6e15neK27OgkIK3GW8p6rxwFleVoyfBN9hea2kZWpT/C+1WJvgnl5tpafpL2s9J0bSy0aceFOK6opHmuOjmqqPGy63bxPUkjN8ed7Xff4kVABqZwAAaml6HnKFWn61Kcfei14njuqNfLicPK/8SK63FeJ7aeDYeDp4jKrt06zVlvvCVt3H0TL8jtca06O8yj3kAGpmAAAAAAAADW0jK1Kb/yvt2GyCL4I8QxmGniceqcYSn9ZThLKnLLDMlKUrbori+B7eYqWFpxcpRhCLl9pqKTl0tbzKU16+hfPPqoADooAAAAAAAAGjpuVqM/Z2yRvHK1klaj0yS734Fc/41bD+UQnCRzYqmv9Wn1KUW+49LPOdXFmxsOaUn1RnbwPRjj8edrXXf5gADQ4AAAGtPR9F1I1XSpupG+Wo4Rc43TTyztdXTe7ibIAAAAAAAAAAAAAAAAAAAAAAAAAAAAcTWqX1cfxXfsi/mdso0VynM4TjeLygeotGUq8qtm4KMlm+7mbirX42bJ6W06cYq0UkuCVl1IuI14dE4Tnl1XkABdUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z'
    },
    {
      id: 7,
      name: "Executive Seat chair",
      price: 32.00,
      image: 'data:image/jpeg;base64,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'
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
              <img src={chair1} alt="Clock" className="promo-bild" />
            </div>
            <div className="promo-karte lila">
              <h3>23% off in all products</h3>
              <a href="#" className="shop-link">View Collection</a>
              <img src={chair2} alt="Cabinet" className="promo-bild" />
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
                <p>{selectedProduct.description}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga alias vero cumque suscipit at quo deserunt expedita iure praesentium harum totam excepturi autem earum, sequi veritatis magnam? Iure, fugiat placeat!
                </p>
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
