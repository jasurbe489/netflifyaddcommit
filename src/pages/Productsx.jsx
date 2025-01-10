const Productsx = ({ product }) => {
    return (
      <div className="product-details">
        <div className="product-details-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-details-image"
          />
        </div>
        <div className="product-details-info">
          <h2 className="product-details-title">{product.title}</h2>
          <p className="product-details-price">{product.price}</p>
          <div className="product-details-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.</p>
            <ul className="product-details-features">
              <li>High quality materials</li>
              <li>Modern design</li>
              <li>Comfortable fit</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Productsx;
  
  