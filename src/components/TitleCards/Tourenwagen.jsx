import React, { useState } from 'react';
import './Rallyefahrzeuge.css';
 import img2 from '../../assets/cards/img2.jpg';
import img10 from '../../assets/cards/img10.jpg'; 
import img11 from '../../assets/cards/img11.jpg';
import img12 from '../../assets/cards/img12.jpg';
import img37 from '../../assets/cards/img37.jpg';
import img38 from '../../assets/cards/img38.jpeg';
import Lightbox from '../Lightbox/Lightbox';

const Tourenwagen = React.forwardRef((props, ref) => {
  const [lightboxOpen, setLightboxOpen] = useState(false); 
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

  const cardData = [
    { image: img2, title: '1', description: 'Porsche 935' },
    { image: img10, title: '2', description: 'Beta Montecarlo Turbo' },
    { image: img11, title: '3', description: 'Beta Montecarlo Turbo' },
    { image: img12, title: '4', description: 'Beta Montecarlo Turbo' },
    { image: img37, title: '5', description: 'Beta Montecarlo Turbo' },
    { image: img38, title: '6', description: 'Beta Montecarlo Turbo' }
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); 
    setLightboxOpen(true); 
  };

  return (
    <div className="rallyefahrzeuge" ref={ref}>
      <div className="rallyeautos">
        <h2>Tourenwagen</h2>
      </div>
    <div className="rallye-card-list">
      {cardData.map((card, index) => (
        <div key={index} className="rallye-title-cards" onClick={() => handleImageClick(index)}>
          <img src={card.image} alt={card.title} className="rallye-title-cards-img" />
          <div className="rallye-title-cards-info">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>

      {lightboxOpen && (
        <Lightbox
          images={cardData.map((card) => ({ src: card.image, alt: card.title }))} 
          initialIndex={selectedImageIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </div> 
  );
});

export default Tourenwagen;