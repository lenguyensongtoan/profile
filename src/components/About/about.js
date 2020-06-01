import React, { Component } from 'react';
import AOS from 'aos';
class about extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum a lorem magna. Fusce tristique lorem ac diam pulvinar
              gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque blandit scelerisque metus et auctor. Cras
              pellentesque nisl at ullamcorper aliquam. Vivamus porttitor at
              urna eu posuere. Sed commodo est sed purus maximus convallis.
             
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="https://img.thuthuatphanmem.vn/uploads/2018/09/19/avatar-facebook-chat-4_105604005.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer</h3>
              <p className="font-italic">
                Aenean cursus commodo convallis. Suspendisse feugiat gravida
                lorem eget feugiat. Proin gravida mattis consequat. Morbi
                dapibus egestas sollicitudin. 
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Birthday:</strong> 15 May 1998
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Phone:</strong> 0385531313
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Email:</strong> lenguyensongtoan15598@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Birthday:</strong> 15 May 1998
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Phone:</strong> 0385531313
                    </li>
                    <li>
                      <i class="icofont-rounded-right"></i>
                      <strong>Email:</strong> lenguyensongtoan15598@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default about;
