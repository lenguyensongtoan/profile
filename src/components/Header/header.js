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
              src="https://lh3.googleusercontent.com/-Jw4fcWOAgZc/V26KdMeU92I/AAAAAAAABao/YP6GmkOme_A0IdUFObLxOzmJdgE3s1PtgCEwYBhgLKtMDAL1Ocqy6H5kkJNvy5K-v_X_jllhzxzJ2e1SMeHiHfYX1ICh_n33PbNfwUXYfmNvve0kCKdtUpyA8Yp3FGtFHE1AtssKo6saNJ1J-cVVXBMm0AbHNL8WBcTWsNYXY3-C-_gt2S98HRJTAPB--5bGaq5lzLRq9R50A22xoYpe1G1nMTERkdwqGhqCCbSHGDlENCZfEwk4depOtiFkUZrCQPKqfZ0v7Q_Sc_ow1CBdRAT45IFTlcUwKmLifkk5qr2ZZ0VZI1emfiZfBku76ZRnY8K35C6Q3BkQOpJl8PPZW386zMuUBlQ0Io67RLl-ZVt1SXIUPg6IZlxuQ-3Jx19YGNbyoKDVzfDEnbEZGIsacA-NkE1OtTUS4YCYMz2ZJ7UvxG7CrJrKC25ccZuA9dF74fbIja5MTgbhHHETGgsfUYa7JvxUAGd80HYbYEGGymkw4IMsBYknwIq5eOeeVaIY9P8lmt_LSIAqFGqNHHSsl7K_GpUHvTDg8-guvooVaeOeOLVuTe6RsVrWFFSZMEp6MBHSQs0bSbSJd2VFbwZ71hdsc1X_oosCJ5lMxsCTPg5odW1zyBSrgGlNqwiK5lb_tmU_rSvyTzbJo6Cz53ijmC9eCo7kw75SH-AU/w139-h140-p/IMG_1097.jpg"
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
