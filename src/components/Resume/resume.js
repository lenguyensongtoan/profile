import React, { PureComponent } from "react";
import AOS from "aos";

class Resume extends PureComponent {
  constructor(props) {
    super(props);
    AOS.init();
  }
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              I'm a Web Developer working with HTML, CSS and JavaScript. In
              additional, I have exprience with ReactJS. Here are some my basic
              information.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Song Toan Le</h4>
                <p>
                  <em>
                    I graduated from Duy Tan University's IT field with a GPA of
                    3.31 / 4. In addition, I had 6 months of work at Enclave
                    Company with professional & English environment.
                  </em>
                </p>
                <ul>
                  <li>Xuan Thuy - Le Thuy - Quang Binh</li>
                  <li>(+84) 385 331 313</li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtwgfHNZMWMvLWHZLGfNpWvnvvvBmFfmpfnhNMwBWkGtcZskrxtcKmwxZkxqdnzqGLHZB"
                      className="__cf_email__"
                      data-cfemail="ec8d80858f89c28e8d9e87808995ac89948d819c8089c28f8381"
                    >
                      lenguyensongtoan15598@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Duy Tan University</h4>
                <h5>2016 - 2020</h5>
                <p>
                  <em>254 Nguyen Van Linh, Hai Chau, Danang</em>
                </p>
                <p>Major: Software Engineering (International Program) </p>
                GPA: 3.31/4
              </div>
              <div className="resume-item">
                <h4>Certifications &amp; Achieves</h4>
                <h5>Summer 2019</h5>
                <p>
                  <em>Axon Active Scrum completion course</em>
                </p>
                <h5>Summer 2020</h5>
                <p>
                  <em>Bootcamp XIII of Enclave completion course</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Chatbot for IT Jobs (at Duy Tan University)</h4>
                <h5>08/2019 - 12/2019</h5>
                <p>
                  <em> at Duy Tan University </em>
                </p>
                <ul>
                  <li>Front-end Developer & Scrum Master</li>

                  <li>Technology: HTML5, CSS3, SQL Server, ASP.NET</li>
                  <li>Tool: Dialog Flow of Google</li>
                  <li>
                    The project consults to choose schools and career
                    orientation in the IT sector
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>eTravel (Traveling System)</h4>
                <h5>02/2020 - 05/2020</h5>
                <p>
                  <em>at Bootcamp Program of Enclaves</em>
                </p>
                <ul>
                  <li>Front-end Developer</li>
                  <li>Technology: ReactJS, MongoDB, NodeJS, Swift</li>
                  <li>Source Version Control: Git</li>
                  <li>Process: Scrum</li>
                  <li>
                    "eTravel" is a web application that helps travelers easy to
                    explore places in Da Nang. If users want to travel in Da
                    Nang but they don’t have any experience traveling this
                    place, the systems generate a schedule based on your needs.
                    Users can track the schedule on this mobile and warning you
                    whenever the weather’s bad. Users can also add the new
                    special spot/location.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
