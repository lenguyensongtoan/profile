import React, { Component } from "react";
import AOS from "aos";
class about extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      birthday: "15/05/1998",
      phone: "0385531313",
      email: "lenguyensongtoan15598@gmail.com",
      address: "Hai Chau, Da Nang",
      age: 22,
      gender: "Male",
    };
    AOS.init();
  }
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About me</h2>
            <p>
              I am a hard-working college student (CMU in Software Engineering)
              currently attending Duy Tan University. Throughout my academic
              career, I have been consistently praised as focused by my
              professors and peers. While working on academic and
              extracurricular projects, I have developed proven communication,
              leadership, technical skills, teamwork skills.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right" >
              <img
                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/106932526_2626817167538974_320234132691808515_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=ig_Fs-4wdSYAX8j20G-&_nc_ht=scontent.fdad1-1.fna&oh=3e6c7e423e35d49c59ad3e911b3a08d9&oe=5F858CAA"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer</h3>
              <p className="font-italic">
                Some basic information about me:  
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Birthday:</strong> {this.state.birthday}
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Phone:</strong> {this.state.phone}
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Email:</strong> {this.state.email}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Age:</strong> {this.state.age}
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Address:</strong> {this.state.address}
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Gender:</strong> {this.state.gender}
                    </li>
                  </ul>
                </div>
              </div>
            
              <p>
                I am highly passionate about IT and I have an educational
                background in designing websites and managing databases. I have
                technical skills as well as good interpersonal skills, enabling
                me to interact with a wide range of clients. I am eager to be
                challenged in order to grow and further improve my IT skills. My
                biggest passion is in life is using my technical know-how to
                benefit other people and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default about;
