import React from 'react';

import '../components/offer.css';
// Import icons
import { Truck, Coins, Award, Clock } from 'lucide-react';

export default function ShoppexOffer() {
  const offers = [
    {
      icon: <Truck className="offer-icon" />,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: <Coins className="offer-icon" />,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: <Award className="offer-icon" />,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: <Clock className="offer-icon" />,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    }
  ];

  return (
    <section className="shopex-container">
      <h2 className="shopex-title">What Shopex Offer!</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="offer-icon-wrapper">
              {offer.icon}
            </div>
            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-description">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
