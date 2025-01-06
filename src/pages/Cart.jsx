import React, { useEffect, useState } from 'react';
import '../components/Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [location, setLocation] = useState({
    country: '',
    city: '',
    postalCode: '',
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartWithQuantities = savedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(cartWithQuantities);
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  const updateQuantity = (index, change) => {
    const newCart = cartItems.map((item, i) => {
      if (i === index) {
        const newQuantity = Math.max(1, (item.quantity || 1) + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  const calculateShipping = () => {
    if (location.country && location.city && location.postalCode) {
      setShippingCost(10); // Static shipping cost for demo
    } else {
      alert('Please fill in all the fields to calculate shipping.');
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="containerk">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>Code: {item.code}</p>
                  <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              </div>
              <div className="quantity-controls">
                <button className="btn btn-secondary" onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.quantity || 1}</span>
                <button className="btn btn-secondary" onClick={() => updateQuantity(index, 1)}>+</button>
                <button className="btn btn-danger" onClick={() => removeItem(index)} style={{color:'black'}}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="summary-section">
        <div className="cart-summary">
          <h2>Cart Totals</h2>
          <div className="cart-totals">
            <p className="subtotal">
              Subtotals: <span>${total.toFixed(2)}</span>
            </p>
            <p className="total">
              Totals: <span>${(total + shippingCost).toFixed(2)}</span>
            </p>
            <p className="info">
              <span className="green-dot">●</span> Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary">Proceed To Checkout</button>
          </div>
        </div>

        <div className="shipping-calculator">
          <h3>Calculate Shipping</h3>
          <input
            type="text"
            placeholder="Country"
            value={location.country}
            onChange={(e) => setLocation({ ...location, country: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={location.postalCode}
            onChange={(e) => setLocation({ ...location, postalCode: e.target.value })}
          />
          <button onClick={calculateShipping}>Calculate Shipping</button>
        </div>
      </div>
    </div>
  );
}
