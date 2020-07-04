import React, { Component } from 'react';

class facts extends Component {
    render() {
        return (
            <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Facts</h2>
                <p>
                After a few years working in the IT industry, I had a few numbers that showed my reputation. 
                With my exprience in the IT, I have some Projects, Clients and I supported my clients, my friends in the projects. 
                </p>
              </div>
    
              <div className="row no-gutters">
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                >
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">5</span>
                    <p><strong>Happy Mentors</strong> with quality of projects at University and Company</p>
                  </div>
                </div>
    
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <span data-toggle="counter-up">10</span>
                    <p><strong>Projects</strong> are completed at University and Company</p>
                  </div>
                </div>
    
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <i className="icofont-live-support"></i>
                    <span data-toggle="counter-up">200</span>
                    <p><strong>Hours Of Support</strong> clients and friends during projects</p>
                  </div>
                </div>
    
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="count-box">
                    <i className="icofont-users-alt-5"></i>
                    <span data-toggle="counter-up">15</span>
                    <p><strong>Hard Workers</strong> worked with me in the projects</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default facts;