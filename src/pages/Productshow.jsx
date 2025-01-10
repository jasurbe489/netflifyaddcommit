import React from 'react';
import '../components/shows.css';
import happy from '../assets/Legs1.png'

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <div className="product-image">
        <img src={happy} alt="B&B Italian Sofa" />
      </div>
      <div className="product-info">
        <h2 className="product-title">Unique Features Of leatest & Trending Poducts</h2>
        <ul className="product-features">
          <li className="feature-pink">All frames constructed with hardwood solids and laminates</li>
          <li className="feature-blue">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
          <li className="feature-green">Arms, backs and seats are structurally reinforced</li>
        </ul>
        <div className="product-action">
          <button className="add-to-cart">Add To Cart</button>
          <div className="product-details">
            <span className="product-name">B&B Italian Sofa</span>
            <span className="product-price">$32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

