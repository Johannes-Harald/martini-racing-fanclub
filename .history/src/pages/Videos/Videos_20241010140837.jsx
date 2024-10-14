import React, { useState } from 'react';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import './Videos.css';
import Navbar from '../../components/Navbar/Navbar';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { title: "Video 1", url: "https://www.youtube.com/watch?v=Blj0BCs2Cgc" },
    { title: "Video 2", url: "https://www.youtube.com/watch?v=UfoUp46G3AM" },
    { title: "Video 4", url: "https://www.youtube.com/watch?v=uvht-oHakAc" },
    { title: "Video 7", url: "https://www.youtube.com/watch?v=ZZ9biQDVZSY" },
    { title: "Video 3", url: "https://www.youtube.com/watch?v=h9LuSjqeCNU" }, 
    { title: "Video 1", url: "https://www.youtube.com/watch?v=P7-EYFnDHok" }
  ];

  const handleVideoClick = (videoUrl) => {
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setSelectedVideo(embedUrl);
};


  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-page">
      <Navbar/>
      <TitleCards videos={videos} />
      <Footer/>
    </div>
  );
};

export default Videos;
