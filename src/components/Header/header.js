import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
class header extends Component {
  state = { activeItem: 'home' };

  handleItemClick(name) {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/p160x160/84586349_2497005700520122_6866902001855234048_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=VCfEUHA3lGYAX_SYgkH&_nc_ht=scontent.fdad2-1.fna&_nc_tp=6&oh=d6c572070f3c0608f2ea1dee4fb440df&oe=5F1F480A"
              alt=""
              className="img-fluid rounded-circle"
            ></img>
            <h1 className="text-light"> Song Toan Le</h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.facebook.com/songtoan15598"
                className="facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/lns.toan/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/song-to%C3%A0n-l%C3%AA-nguy%E1%BB%85n-9b8a3a193/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <Nav navbar className="nav-menu">
            <NavItem
              active={activeItem === 'home'}
              onClick={() => this.handleItemClick('home')}
            >
              <NavLink href="#hero">
                <i className="bx bx-home"></i> <span>Home</span>
              </NavLink>
            </NavItem>
            <NavItem
              active={activeItem === 'about'}
              onClick={() => this.handleItemClick('about')}
            >
              <NavLink href="#about">
                <i className="bx bx-user"></i> <span>About</span>
              </NavLink>
            </NavItem>
            <NavItem
              active={activeItem === 'resume'}
              onClick={() => this.handleItemClick('resume')}
            >
              <NavLink href="#resume">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </NavLink>
            </NavItem>
            <NavItem
              active={activeItem === 'portfolio'}
              onClick={() => this.handleItemClick('portfolio')}
            >
              <NavLink href="#portfolio">
                <i className="bx bx-book-content"></i> Activities
              </NavLink>
            </NavItem>
            <NavItem
              active={activeItem === 'testimonials'}
              onClick={() => this.handleItemClick('testimonials')}
            >
              <NavLink href="#testimonials">
                <i className="bx bx-envelope"></i> People Saying
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </header>
    );
  }
}

export default header;
