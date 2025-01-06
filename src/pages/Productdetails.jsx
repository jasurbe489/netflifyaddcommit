import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/ProductDetail.css';

import Image1 from '../assets/Rectangle 128.png';
import Image2 from '../assets/girl.png'
import Image3 from '../assets/cryinggirl.png'
import Image4 from '../assets/fuu.png'
const Productdetails = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { id } = useParams();
  
  const getProduct = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products.find(product => product.id === parseInt(id));
  };
  const relatedProducts = [
    {
      id: 1,
      name: "Men's Fashion",
      price: 43.00,
      image: Image1,
      rating: 4.5
    },
    {
      id: 2,
      name: "Women's Clothing",
      price: 67.00,
      image: Image2,
      rating: 4.5
    },
    {
      id: 3,
      name: "Sportswear",
      price: 67.00,
      image: Image3,
      rating: 4.5
    },
    {
      id: 4,
      name: "Digital Watch",
      price: 51.00,
      image: Image4,
      rating: 4.0
    }
  ];

  const product = getProduct();

  const tabContent = {
    description: {
      title: 'Varius tempor.',
      content: 'Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.',
      details: [
        'Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.',
        'Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.',
        'Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.',
        'Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.'
      ]
    },
    additionalInfo: {
      content: 'Additional info content'
    },
    reviews: {
      content: 'rewivs'
    },
    video: {
      content: 'video'
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-main-section">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            <img src={product.image} alt="thumbnail" />
            <img src={product.image} alt="thumbnail" />
            <img src={product.image} alt="thumbnail" />
          </div>
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="ratings">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < product.rating ? "star filled" : "star"}>★</span>
            ))}
            <span className="review-count">(22 Reviews)</span>
          </div>

          <div className="prices">
            <span className="sale-price">${product.salePrice.toFixed(2)}</span>
            <span className="original-price">${product.price.toFixed(2)}</span>
          </div>

          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.</p>
          </div>

          <div className="categories">
            <span>Categories: Fashion, Style</span>
          </div>

          <div className="tags">
            <span>Tags: Modern, Design</span>
          </div>

          <div className="additional-info">
            <h3>More details</h3>
            <ul>
              <li>Product Code: {product.code}</li>
              <li>Availability: In Stock</li>
              <li>Material: 100% Cotton</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-tabs-section">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab ${activeTab === 'additionalInfo' ? 'active' : ''}`}
            onClick={() => setActiveTab('additionalInfo')}
          >
            Additional Info
          </button>
          <button
            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className={`tab ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            Video
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div>
              <h2>{tabContent.description.title}</h2>
              <p>{tabContent.description.content}</p>
              <div className="more-details">
                <h3>More details</h3>
                <ul>
                  {tabContent.description.details.map((detail, index) => (
                    <li key={index}>
                      <span className="arrow">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {activeTab === 'additionalInfo' && (
            <div>{tabContent.additionalInfo.content}</div>
          )}
          {activeTab === 'reviews' && (
            <div>{tabContent.reviews.content}</div>
          )}
          {activeTab === 'video' && (
            <div>{tabContent.video.content}</div>
          )}
        </div>
      </div>
      <div className="related-products">
        <h2 style={{color:'#0D0E43', fontFamily: 'Josefin Sans,serif'}}>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map(product => (
            <div className="related-product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <div className="ratings">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < product.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productdetails;