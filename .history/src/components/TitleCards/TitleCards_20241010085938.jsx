import React, { useState } from 'react';
import './TitleCards.css'; // Your CSS file for styling

const TitleCards = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="title-cards-container">
      <div className="cards">
        <div className="video-cards">
          {videos.map((video, index) => (
            <div key={index} className="card" onClick={() => openModal(video)}>
              <img
                src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`} // Correctly formatted URL
                alt={video.title}
                className="video-thumbnail"
              />

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo.url.split('v=')[1]}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleCards;
