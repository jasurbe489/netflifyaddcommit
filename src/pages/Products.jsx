import React, { useEffect, useState } from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2D2D2D',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    overflowX: 'auto',
    padding: '10px 0',
  },
  card: {
    flex: '0 0 auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  details: {
    marginTop: '10px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  code: {
    color: '#777',
    fontSize: '14px',
  },
  price: {
    color: '#2D8C3E',
    fontSize: '16px',
    marginTop: '10px',
  },
  icons: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    gap: '8px',
  },
  iconButton: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#333',
  },
  iconButtonHover: {
    color: '#007bff',
  },
  indicators: {
    marginTop: '10px',
  },
  indicator: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    margin: '0 4px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default function ProductCarousel() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Cantilever chair', code: 'Y523201', price: 42.0, image: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'Cantilever chair', code: 'Y523202', price: 42.0, image: 'data:image/jpeg;base64,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' },
    { id: 3, name: 'Cantilever chair', code: 'Y523203', price: 42.0, image: 'data:image/jpeg;base64,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' },
    { id: 4, name: 'Cantilever chair', code: 'Y523204', price: 42.0, image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmISeF_Xh9AS_zLjmX-OknsDfux-TB6wgrvhaNOtUIA57VlNgK' },
  ]);

  const [cartItems, setCartItems] = useState([])

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
    <div style={styles.container}>
      <h2 style={styles.heading}>Featured Products</h2>
      <div style={styles.carousel}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.icons}>
              <button
                style={styles.iconButton}
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={20} />
              </button>
              <button style={styles.iconButton}>
                <Search size={20} />
              </button>
              <button
                style={{
                  ...styles.iconButton,
                  color: product.isFavorite ? '#ff0000' : '#333',
                }}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart size={20} fill={product.isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>
            <img src={product.image} alt={product.name} style={styles.image} />
            <div style={styles.details}>
              <h3 style={styles.name}>{product.name}</h3>
              <p style={styles.code}>Code - {product.code}</p>
              <p style={styles.price}>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.indicators}>
        {products.map((_, index) => (
          <span key={index} style={styles.indicator}></span>
        ))}
      </div>
    </div>
  );
}

