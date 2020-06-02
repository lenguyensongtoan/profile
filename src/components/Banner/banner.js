import React, { Component } from 'react';
import AOS from 'aos';
class banner extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Song Toan Le</h1>
          <p>I'm Developer</p>
        </div>
      </section>
    );
  }
}

export default banner;
