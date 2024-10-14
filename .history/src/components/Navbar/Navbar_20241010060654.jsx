import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import profile_icon from '../../assets/profile_img.webp'; 
import caret_icon from '../../assets/caret_icon.svg';
import lightModeSearch from '../../assets/search_icon_dark.png';

const Navbar = ({ scrollToRallyefahrzeuge, rallyefahrzeugeRef, scrollTo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const [navigateToRallye, setNavigateToRallye] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

/*  const handleScrollToRallyefahrzeuge = () => {
    if (location.pathname !== "/") {
      setNavigateToRallye(true); // Set flag to indicate we want to scroll after navigation
      navigate("/"); // Navigate to home
    }
  }; 

/*  useEffect(() => {
    if (navigateToRallye && location.pathname === "/") {
      setTimeout(() => {
        if (rallyefahrzeugeRef.current) {
          console.log("Ref found, scrolling...");
          rallyefahrzeugeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log("Ref not found");
        }
      }, 100); // Add delay to allow for navigation to complete
      setNavigateToRallye(false); // Reset flag
    }
  }, [navigateToRallye, location.pathname, rallyefahrzeugeRef]);*/

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newDarkMode = !prev;
      document.body.classList.toggle('dark-mode', newDarkMode);
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div ref={navRef} className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" style={{ width: '140px', height: '61px' }} />
        <ul>
          <li onClick={scrollTo}><Link to="/" className="link-style">Startseite</Link></li>
          <li><Link to="/videos" className="link-style">Videos</Link></li>
          <li onClick={scrollToRallyefahrzeuge}><Link to="/" className="link-style">Fahrzeuge</Link></li>
        </ul> 
      </div>

      <div className="navbar-right">
        <p>Nutzer</p>
        
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className='dark-mode-btn'>
          {darkMode ? 'Hell' : 'Dunkel'}
        </button>

        <div className='navbar-profile'>
          <img src={profile_icon} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" />
          <div className='dropdown'>
            <p>Abmelden</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import profile_icon from '../../assets/profile_img.webp'; 
import caret_icon from '../../assets/caret_icon.svg';
import lightModeSearch from '../../assets/search_icon_dark.png';

const Navbar = ({ scrollTo, scrollToRallyefahrzeuge, scrollToTitleCards, }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const [navigateToRallye, setNavigateToRallye] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      scrollTo();
    }, 100);
  };

  const handleScrollToRallyefahrzeuge = () => {
    if (location.pathname !== "/") {
      navigate("/");  // Navigate to home if not already there
      setNavigateToRallye(true);
    } else {
      scrollToRallyefahrzeuge();
    }
//    setTimeout(() => {
//      scrollToRallyefahrzeuge();
//    }, 100);  // Delay to ensure navigation has occurred before scrolling
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    // Set initial state of navbar based on scroll position
    handleScroll();

    //window.addEventListener('scroll', handleScroll);
    
    if (location.pathname === "/" && navigateToRallye) {
      setTimeout(() => {
        scrollToRallyefahrzeuge();
        setNavigateToRallye(false); // Reset flag
      }, 100);  // Delay to ensure page load/render
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, navigateToRallye]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newDarkMode = !prev;
      document.body.classList.toggle('dark-mode', newDarkMode);
      // Store the user's preference in localStorage  TO HERE ---> to="/"
      localStorage.setItem('darkMode', newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div ref={navRef} className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" style={{ width: '140px', height: '61px' }} />
        <ul>
          <li onClick={scrollToTop}><Link to="/" className="link-style">Startseite</Link></li>
          <li><Link to="/videos" className="link-style">Videos</Link></li>
          <li onClick={handleScrollToRallyefahrzeuge}><Link className="link-style">Fahrzeuge</Link></li>
        </ul> 
      </div>

      <div className="navbar-right">
        <img  
          src={darkMode ? search_icon : lightModeSearch}
          alt="Search"
          className='icons' 
        />
        <p>Nutzer</p>
        
        {/* Dark Mode Toggle Button }
        <button onClick={toggleDarkMode} className='dark-mode-btn'>
          {darkMode ? 'Hell' : 'Dunkel'}
        </button>

        <div className='navbar-profile'>
          <img src={profile_icon} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" />
          <div className='dropdown'>
            <p>Abmelden</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/