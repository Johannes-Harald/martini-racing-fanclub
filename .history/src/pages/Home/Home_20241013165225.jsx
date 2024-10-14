import React, { useRef, useEffect, useState } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom'; 
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import fanclub from '../../assets/fanclub.png';
import Rallyefahrzeuge from '../../components/TitleCards/Rallyefahrzeuge.jsx';
import Ferrari from '../../components/TitleCards/Ferrari.jsx';
import PrototypRennwagen from '../../components/TitleCards/PrototypRennwagen.jsx';
import Tourenwagen from '../../components/TitleCards/Tourenwagen.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import background from '../../assets/fanclub-removebg-preview.png';


const Home = () => {
  const rallyefahrzeugeRef = useRef(null);
  const ferrariRef = useRef(null);
  const prototypRennwagenRef = useRef(null);
  const tourenwagen = useRef(null);
  const [navigateToRallye, setNavigateToRallye] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = () => {
    const home = document.querySelector('.home');
      home.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (navigateToRallye && location.pathname === "/") {
      const rallyefahrzeugeSection = rallyefahrzeugeRef.current;
      if (rallyefahrzeugeSection) {
        rallyefahrzeugeSection.scrollIntoView({ behavior: 'smooth' });
      }
      setNavigateToRallye(false); 
    }
  }, [navigateToRallye, location]);

  const scrollToRallyefahrzeuge = () => {
    if (location.pathname !== "/") {
      setNavigateToRallye(true); 
      navigate("/"); 
    } else {
      rallyefahrzeugeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const components = [
      { ref: rallyefahrzeugeRef, name: 'rallyefahrzeuge' },
      { ref: ferrariRef, name: 'ferrari' },
      { ref: prototypRennwagenRef, name: 'prototypRennwagen' },
      { ref: tourenwagen, name: 'tourenwagen' }
    ];

    components.forEach(({ ref }) => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.current.classList.add('active');
      } else {
        ref.current.classList.remove('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      <Navbar 
         scrollTo={scrollTo}
         rallyefahrzeugeRef={rallyefahrzeugeRef}
         scrollToRallyefahrzeuge={scrollToRallyefahrzeuge}
      />
      <div className="img-cover">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="overlay"></div>
      </div>

      <div className='hero-caption'>
      <img src={background} alt="" className='caption-img' />
      </div> 

      <div className='more-cards'>
        <div ref={rallyefahrzeugeRef} className="rallyefahrzeuge">
          <Rallyefahrzeuge title={"Rallyefahrzeuge"} category={"top_rated"} />
        </div>
        <div ref={ferrariRef} className="component ferrari">
          <Ferrari title={"Die roten Pferde"} category={"top_rated"} />
        </div>
        <div ref={prototypRennwagenRef} className="component title-card-list-three">
          <PrototypRennwagen title={"PrototypRennwagen"} category={"top_rated"} />
        </div>
        <div ref={tourenwagen} className="component title-card-list-four">
          <Tourenwagen title={"Tourenwagen"} category={"top_rated"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;