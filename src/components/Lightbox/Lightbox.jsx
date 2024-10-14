import React, { useState } from 'react';
import './Lightbox.css';

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="lightbox-img" />

        {/* Navigation Arrows */}
        <button className="lightbox-arrow left" onClick={handlePrevClick}>←</button>
        <button className="lightbox-arrow right" onClick={handleNextClick}>→</button>

        {/* Thumbnails */}
        <div className="lightbox-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Lightbox;