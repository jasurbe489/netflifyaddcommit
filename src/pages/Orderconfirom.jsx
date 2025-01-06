import React from 'react';
import { useNavigate } from 'react-router-dom';
 import '../components/OrderConfirmation.css';
function OrderConfirom() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); // Navigate to the home page or shop page
  };

  return (
    <div className="order-confirmation">
      <div className="confirmation-container">
        <div className="clock-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="checkmark">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Your Order Is Completed!</h2>
        <p>
          Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.
        </p>
        <button className="continue-shopping" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirom;