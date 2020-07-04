import React, { PureComponent } from "react";
import Gallery from "../Gallery/ImageGallery";
class Portfolio extends PureComponent {
  render() {
    return (
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>My Activities</h2>
            <p>
              Here are some pictures about my activities when I was at
              university and old company. I have joined many activities about
              sports, study and team building such as football, volleyball,
              etc,.
            </p>
          </div>
          <div data-aos="fade-up">
            <Gallery></Gallery>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
