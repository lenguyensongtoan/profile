import React, { PureComponent } from "react";

class Peoplesay extends PureComponent {
   render() {
    return (
      <section id="testimonials" className="testimonials ">
        <div className="container">
          <div className="section-title" data-aos="fade-up" >
            <h2>People Saying</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
                <h5>Royce</h5>
                <p className="font-weight-light mb-0">
                  it sint consectetur velit. Quisquam quos quisquam cupiditate.
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
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate.
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
                  Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste
                  officiis commodi quidem hic quas.
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
