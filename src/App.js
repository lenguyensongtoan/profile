import React from "react";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/css/style.css";

import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import About from "./components/About/about";
import Facts from "./components/Facts/facts";
import Skills from "./components/Skill/skills";
import Resume from "./components/Resume/resume";
import Portfolio from "./components/Portfolio/portfolio";
import PeopleSaying from "./components/PeopleSay/peoplesay";
function App() {
  return (
    <div>
      <Header></Header>
      <div id="main">
        <Banner></Banner>
        <About></About>
        <Facts></Facts>
        <Skills></Skills>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <PeopleSaying></PeopleSaying>
        <a href="#hero" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </div>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            <strong>
              <span>Song Toan Le</span>
            </strong>
          </div>
          <div className="credits">
            <a href="https://duytan.edu.vn/">Duy Tan University</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
