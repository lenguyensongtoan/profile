import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p160x160/84586349_2497005700520122_6866902001855234048_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=5ET5wX9xAvYAX_SitED&_nc_ht=scontent.fdad2-1.fna&_nc_tp=6&oh=b2dcdc3d2d1a28df88c8d2547f519865&oe=5EF7BB0A"
              alt=''
              className="img-fluid rounded-circle"
            ></img>
            <h1 className="text-light"> Song Toan Le</h1>
            <div className="social-links mt-3 text-center">
              <a className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="nav-menu">
            <ul>
              <li class="active">
                <a href="#home">
                  <i class="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <i class="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <i class="bx bx-book-content"></i> Portfolio
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="bx bx-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default header;
