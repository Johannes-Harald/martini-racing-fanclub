import React, { useState } from 'react';
import './Rallyefahrzeuge.css';
import img3 from '../../assets/cards/img3.jpg';
import img4 from '../../assets/cards/img4.jpg';
import img5 from '../../assets/cards/img5.webp';
import img6 from '../../assets/cards/img6.jpg';
import Lightbox from '../Lightbox/Lightbox'; 

const Rallyefahrzeuge = React.forwardRef((props, ref) => {
  const [lightboxOpen, setLightboxOpen] = useState(false); 
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

  const cardData = [
    { image: img3, title: '1', description: 'Kimera 037' },
    { image: img4, title: '2', description: 'Kimera 037' },
    { image: img5, title: '3', description: 'Kimera 037' },
    { image: img6, title: '4', description: 'Innenraum des Kimera 037' }
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); 
    setLightboxOpen(true); 
  };

  return (
    <div className="rallyefahrzeuge">
      <div className="rallyeautos">
        <h2>Rallyefahrzeuge</h2>
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

export default Rallyefahrzeuge;