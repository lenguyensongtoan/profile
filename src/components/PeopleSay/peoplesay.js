import React, { PureComponent } from "react";

class Peoplesay extends PureComponent {
   render() {
    return (
      <section id="testimonials" className="testimonials ">
        <div className="container">
          <div className="section-title" data-aos="fade-up" >
            <h2>People Saying</h2>
            <p>
            Here are some comments from my friends, colleagues about me, us projects when I was in university and company.
            </p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://e-travel-s3-bucket.s3.ap-southeast-1.amazonaws.com/image/7ab7245a2932e760f7cf66631163906d"
                  alt=""
                />
                <h5>Kii</h5>
                <p className="font-weight-light mb-0">
                  He is very friendly and kind, he always ready with my any questions. We have worked in many projects at Duy Tan university
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://e-travel-s3-bucket.s3.ap-southeast-1.amazonaws.com/image/c93e384bfcd3c46c4890177603123cd0"
                  alt=""
                />
                <h5>Will</h5>
                <p className="font-weight-light mb-0">
                  We were in eTravel projects. We hardly worked wduring in project so we got more experience from this project.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "7rem", height: "7rem" }}
                  src="https://e-travel-s3-bucket.s3.ap-southeast-1.amazonaws.com/image/7694fd17d9b9596e9c62357dc3b84938"
                  alt=""
                />
                <h5>Quang</h5>
                <p className="font-weight-light mb-0">
                 We have experience with ReactJS and work together in the project at Bootcamp XIII of Enclave Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Peoplesay;
