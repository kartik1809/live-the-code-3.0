import React from 'react';
import './Carousel.css'; 

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.imgSrc} alt={item.altText} />
            <p>{item.name}</p>
          </div>
        ))}
        {/* Duplicate items to create a seamless loop */}
        {items.map((item, index) => (
          <div className="carousel-item" key={`dup-${index}`}>
            <img src={item.imgSrc} alt={item.altText} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
