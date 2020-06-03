import React, { Component } from 'react';
import AOS from 'aos';
class about extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      birthday: '15/05/1998',
      phone: '0385531313',
      email: 'royce@enclave.vn',
      address: 'Hai Chau, Da Nang',
      age: 22,
      gender: 'Male',
    };
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
                src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/p960x960/84586349_2497005700520122_6866902001855234048_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=9j7EwF4gSwIAX-gpGd0&_nc_ht=scontent.fhan4-1.fna&_nc_tp=6&oh=ccdcd37009dba956b0ac22dbc4132530&oe=5EFAE486"
                className="img-fluid"
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
