import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';
import '../components/product.css';
import from1 from '../assets/sss.png'
import from2 from '../assets/sss 3.png'
import from3 from '../assets/imas).png'
import from4 from '../assets/image).png'

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Cantilever chair',
      code: 'Y523201',
      price: 42.00,
      image: from1,
    },
    {
      id: 2,
      name: 'Cantilever chair',
      code: 'Y523202',
      price: 42.00,
      image: from4,
    },
    {
      id: 3,
      name: 'Cantilever chair',
      code: 'Y523203',
      price: 42.00,
      image: from3,
    },
    {
      id: 4,
      name: 'Cantilever chair',
      code: 'Y523204',
      price: 42.00,
      image: from2,
    }
  ]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setProducts(prevProducts => 
      prevProducts.map(product => ({
        ...product,
        isFavorite: savedFavorites[product.id] || false
      }))
    );
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    localStorage.setItem('cartCount', updatedCart.length);
  };

  const toggleFavorite = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );

    const updatedFavorites = products.reduce((acc, product) => {
      if (product.id === productId) {
        acc[product.id] = !product.isFavorite;
      } else if (product.isFavorite) {
        acc[product.id] = true;
      }
      return acc;
    }, {});

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="asosiy-konteyner">
      <h2 className="sarlavha">Featured Products</h2>
      <div className="mahsulotlar-tori">
        {products.map((product) => (
          <div key={product.id} className="mahsulot-kartochka">
            <div className="mahsulot-tugmalar">
              <button
                className="harakat-tugma"
                onClick={() => addToCart(product)}
                aria-label="Add to cart"
              >
                <ShoppingCart size={20} />
              </button>
              <button 
                className="harakat-tugma"
                aria-label="Quick view"
              >
                <Search size={20} />
              </button>
              <button
                className={`harakat-tugma ${product.isFavorite ? 'tanlangan' : ''}`}
                onClick={() => toggleFavorite(product.id)}
                aria-label="Add to favorites"
              >
                <Heart 
                  size={20} 
                  fill={product.isFavorite ? 'currentColor' : 'none'} 
                />
              </button>
            </div>
            <div className="mahsulot-rasm-konteyner">
              <img 
                src={product.image} 
                alt={product.name} 
                className="mahsulot-rasm" 
              />
            </div>
            <div className="mahsulot-malumotlar">
              <h3 className="mahsulot-nomi">{product.name}</h3>
              <p className="mahsulot-kodi">Code - {product.code}</p>
              <p className="mahsulot-narxi">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

