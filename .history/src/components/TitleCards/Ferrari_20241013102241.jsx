import React, { useState } from 'react';
import './Ferrari.css';
import img14 from '../../assets/cards/img14.jpg'; 
import img15 from '../../assets/cards/img15.jpg';
import img16 from '../../assets/cards/img16.jpg';
import img17 from '../../assets/cards/img17.jpg';
import img18 from '../../assets/cards/img18.jpg';
import img19 from '../../assets/cards/img19.jpg';
import img20 from '../../assets/cards/img20.jpg';
import img21 from '../../assets/cards/img21.jpg';
import img22 from '../../assets/cards/img22.jpg';  
import img23 from '../../assets/cards/img23.jpg';
import img24 from '../../assets/cards/img24.jpg';
import img25 from '../../assets/cards/img25.jpg';
import img26 from '../../assets/cards/img26.jpg';
import img27 from '../../assets/cards/img27.jpg';
import img28 from '../../assets/cards/img28.jpg';
import img29 from '../../assets/cards/img29.jpg';
import img30 from '../../assets/cards/img30.jpg';
import img31 from '../../assets/cards/img31.jpg';
import img32 from '../../assets/cards/img32.jpg';
import img34 from '../../assets/cards/img34.jpg';
import img35 from '../../assets/cards/img35.jpg';
import Lightbox from '../Lightbox/Lightbox';

const Ferrari = React.forwardRef(( props, ref ) => {
  const [lightboxOpen, setLightboxOpen] = useState(false); // State to control lightbox visibility
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const cardData = [
    { image: img14, title: '1', description: 'Beauty vs. Audis Beast. Möglicherweise Sonoma oder Mazda Laguna Seca' },
    { image: img15, title: '2', description: 'Das F40 LM-Einhorn' },
    { image: img16, title: '3', description: 'Innenraum des F40 LM-Einhorns' },
    { image: img17, title: '4', description: 'Drei verschiedene F40s' },
    { image: img18, title: '5', description: 'Das F40 LM-Einhorn' },
    { image: img19, title: '6', description: 'Drei verschiedene F40s' },
    { image: img20, title: '7', description: 'Das F40 LM-Einhorn' },
    { image: img21, title: '8', description: 'Das F40 LM-Einhorn' },
    { image: img22, title: '9', description: 'Innenraum des F40 LM-Einhorns' },
    { image: img23, title: '10', description: 'Innenraum des F40 LM-Einhorns' },
    { image: img24, title: '11', description: 'Innenraum des F40 LM-Einhorns' },
    { image: img25, title: '12', description: 'Innenraum des F40 LM-Einhorns' },
    { image: img26, title: '13', description: 'Der Ferrari F-40 LM' },
    { image: img27, title: '14', description: 'Das F40 LM-Einhorn' },
    { image: img28, title: '15', description: 'Das F40 LM-Einhorn' },
    { image: img29, title: '16', description: 'Was für eine traumhafte Tempojagd wäre das!' },
    { image: img35, title: '17', description: 'Beauty vs. Audis Beast' },
    { image: img31, title: '18', description: 'Beauty vs. Audis Beast' },
    { image: img32, title: '19', description: 'Beauty vs. Audis Beast' },
    { image: img34, title: '20', description: 'Jean Alesi auf Mazda Laguna Seca' },
    { image: img30, title: '21', description: 'Innenraum des F40 LM-Einhorns' }
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Set the index of the clicked image
    setLightboxOpen(true); // Open the lightbox
  };

  return (
   <div className="ferraris" ref={ref}>
    <div className="ferrarish2">
      <h2>Ferraris</h2>
    </div>
    <div className="card-list-ferrari">
      {cardData.map((card, index) => (
        <div key={index} className="title-cards-ferrari" onClick={() => handleImageClick(index)}>
          <img src={card.image} alt={card.title} className="title-cards-img-ferrari" />
          <div className="title-cards-info-ferrari">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
   </div>

         {/* Conditionally render the Lightbox when open */}
         {lightboxOpen && (
        <Lightbox
          images={cardData.map((card) => ({ src: card.image, alt: card.title }))} // Pass the images to the Lightbox
          initialIndex={selectedImageIndex} // Start with the clicked image
          onClose={() => setLightboxOpen(false)} // Close the lightbox
        />
      )}
   </div>
  );
});

export default Ferrari;