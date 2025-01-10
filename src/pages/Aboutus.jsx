import React from 'react';
import '../components/About.css'
import Aboutfoto from '../assets/Rectangle 56.png';
import Aboutfoto2 from '../assets/maks.png';
import Aboutfoto3 from '../assets/Mask Gup.png';
import { Truck, Coins, Award, HeadphonesIcon } from 'lucide-react';

const Aboutus = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src={Aboutfoto} alt="Business meeting" />
          </div>
          <div className="hero-text">
            <h1>Know About Our Ecommerce Business, History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.</p>
            <button className="contact-btn"><a href="/contact" style={{textDecoration:'none', color:'white'}}>Contact us</a></button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Truck size={32} />
            </div>
            <h3>Free Delivery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Coins size={32} />
            </div>
            <h3>100% Cash Back</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Award size={32} />
            </div>
            <h3>Quality Product</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <HeadphonesIcon size={32} />
            </div>
            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>Our Client Say!</h2>
        <div className="testimonial-container">
          <div className="testimonial-images">
            <img src={Aboutfoto} alt="Client 1" className="client-image" />
            <img src={Aboutfoto2} alt="Client 2" className="client-image active" />
            <img src={Aboutfoto3} alt="Client 3" className="client-image" />
          </div>
          <h3 className="client-name">Selina Gomez</h3>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plus vita a velit nevis, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
          </p>
          <div className="testimonial-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
