import React from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';
import Gallery from "./components/Gallery/ImageGallery";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Facts from "./components/Facts/facts";
import Skills from "./components/Skill/skills";


function App() {
  return (
    <div >
      <button type="button" className="mobile-nav-toggle d-xl-none">
      <i className="icofont-navigation-menu"></i>
    </button>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Facts></Facts>
      <Skills></Skills>
      {/* <Gallery></Gallery> */}
      
    </div>
  );
}

export default App;
