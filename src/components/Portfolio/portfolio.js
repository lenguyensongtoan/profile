import React, { PureComponent } from "react";
import Gallery from "../Gallery/ImageGallery";
class Portfolio extends PureComponent {
  
  render() {
    return (
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div data-aos="fade-up">
          <Gallery ></Gallery>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
