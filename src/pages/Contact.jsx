import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/ShippingForm.css';
import Cart from '../pages/Cart';
function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'Uzbekistan',
    postalCode: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const BOT_TOKEN = '7853198708:AAGYTT7w8Xt1LhRaXNDS4wV9zbblroZHYfQ';
      const CHAT_ID = '7270212196';
      
      const message = `
Foidalanuvchi ma'lumotlari:
📧 Email: ${formData.email}
👤 Ismi: ${formData.firstName} ${formData.lastName}
📍 Addresi: ${formData.address}
🏢 ishlash joyi: ${formData.apartment}
🌆 shahar: ${formData.city}
🏳️ davalat: ${formData.country}
📮 posta codi: ${formData.postalCode}
📫 Rozilik haqida : ${formData.newsletter ? 'HA' : 'YOQ'}
      `;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        toast.success('botga malumotlaringiz bordi!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reset form
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          apartment: '',
          city: '',
          country: 'Bangladesh',
          postalCode: '',
          newsletter: false
        });
      } else {
        throw new Error('Uzur,xatolik yuz berdi qaytadan urinib ko\'ring!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit order. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="shipping-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="shipping-header">
        <h2>Contact Information</h2>
        <div className="login-link">
          Already have an account? <a href="/Login">Log In</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="shipping-form">
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email or mobile phone number"
            required
            className="form-input"
          />
        </div>

        <div className="newsletter-checkbox">
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <span>Keep me up to date on news and exclusive offers</span>
          </label>
        </div>

        <h2 className="shipping-title">Shipping address</h2>

        <div className="name-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name (optional)"
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            placeholder="Apartment, suite, etc. (optional)"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="form-input"
          />
        </div>

        <div className="location-group">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="form-input"
            readOnly
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Continue Shipping
        </button>
        <div className="mabecard">
      <Cart/>

      </div>
      </form>
    
    </div>
    
  
  );
}

export default Contact;
