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
import About from "./components/About/about"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Gallery></Gallery>
      
    </div>
  );
}

export default App;
