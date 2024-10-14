import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Videos from './pages/Videos/Videos';        

function App() {
  //const navigate = useNavigate();
  //const location = useLocation();



  {/*const scrollToTitleCards = () => {
    // Assuming you have a reference to your TitleCards section
    const titleCardsSection = document.getElementById('rallyeautos'); // Adjust this ID as needed
    if (titleCardsSection) {
      titleCardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  const scrollToTitleCards = () => {
    if (location.pathname === '/') {
      rallyefahrzeugeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If you're on another page, navigate to the home page first
      navigate('/');
      // After navigating, wait for the page to load and then scroll to rallyefahrzeugeRef
      setTimeout(() => {
        rallyefahrzeugeRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Use a timeout to ensure the page is fully rendered before scrolling 
    }
  }; 
  <Route path="/Home" element={<Navbar scrollToTop={scrollToTop} scrollToTitleCards={scrollToTitleCards}/>} />
  */}

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
