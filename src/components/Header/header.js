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
              <a href="https://www.facebook.com/songtoan15598" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/lns.toan/" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/song-to%C3%A0n-l%C3%AA-nguy%E1%BB%85n-9b8a3a193/" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li >
                <a href="#hero">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" >
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <i className="bx bx-book-content"></i> Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials">
                  <i className="bx bx-envelope"></i> People Saying
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default header;
