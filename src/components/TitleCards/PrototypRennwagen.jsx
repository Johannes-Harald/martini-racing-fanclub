import React, { useState } from 'react';
import './Rallyefahrzeuge.css';
import img1 from '../../assets/cards/img1.png'; 
import img7 from '../../assets/cards/img7.jpg';
import img8 from '../../assets/cards/img8.jpg';
import img9 from '../../assets/cards/img9.jpg';
import lcmonza from '../../assets/cards/lcmonza.jpg';
import lcparmalat from '../../assets/cards/lcparmalat.jpg';
import Lightbox from '../Lightbox/Lightbox'; 

const PrototypRennwagen = React.forwardRef((props, ref) => {
  const [lightboxOpen, setLightboxOpen] = useState(false); 
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

  const cardData = [
    { image: img1, title: '1', description: 'LC1 auf der Nordschleife' },
    { image: img7, title: '2', description: 'LC1 auf der Nordschleife' },
    { image: img8, title: '3', description: 'LC1 bei Le Mans' },
    { image: img9, title: '4', description: 'LC1' },
    { image: lcmonza, title: '5', description: 'LC1 bei Le Mans' },
    { image: lcparmalat, title: '6', description: 'LC1' }
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); 
    setLightboxOpen(true); 
  };

  return (
    <div className="rallyefahrzeuge" ref={ref}>
      <div className="rallyeautos">
        <h2>Prototyp-Rennwagen</h2>
      </div>
        <div className="rallye-card-list" >
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

export default PrototypRennwagen;