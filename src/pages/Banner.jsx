import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/Banner.css';
import chair from '../assets/chair.png';

function Banner() {
  const slides = [
    {
      title: "New Furniture Collection Trends in 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      image: chair,
      discount: "50% off"
    },
    {
      title: "Stylish Lighting Solutions",
      description: "Discover our latest collection of modern lamps to illuminate your space with elegance.",
      image: chair,
      discount: "30% off"
    },
    {
      title: "Comfortable Seating Options",
      description: "Explore our range of ergonomic chairs designed for both style and comfort.",
      image: chair,
      discount: "40% off"
    }
  ];


  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-container">
              <div className="banner-content">
                <span className="banner-subtitle">Best Furniture For Your Castle....</span>
                <h1 className="banner-title">{slide.title}</h1>
                <p className="banner-description">{slide.description}</p>
                <button className="shop-now-btn"><a href="/Home2" style={{color:'white', textDecoration: 'noneЁ'}}>Shop Now</a></button>
              </div>
              <div className="banner-image-wrapper">
                <div className="discount-badge">
                  <span className="discount-amount" style={{marginLeft: '20px', fontFamily: 'sans-serif'}}>{slide.discount}</span>
                </div>
                <div className="image-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="banner-image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;

