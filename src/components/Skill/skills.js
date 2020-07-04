import React, { Component } from "react";
import AOS from "aos";
import { Progress } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
class skills extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
  }
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Throughout my academic career, I have been consistently praised as
              focused by my professors and peers. While working on academic and
              extracurricular projects, I have developed proven communication,
              leadership, technical skills, teamwork skills. I have experience
              with ReactJS, React Native, SQL Server, .NET, HTML, CSS and some technical.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">HTML</span>
                <div className="progress-bar-wrap">
                  <Progress percent={80} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS</span>
                <div className="progress-bar-wrap">
                  <Progress percent={75} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">ReactJS</span>
                <div className="progress-bar-wrap">
                  <Progress percent={75} progress color="blue"></Progress>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">React Native</span>
                <div className="progress-bar-wrap">
                  <Progress percent={40} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Git</span>
                <div className="progress-bar-wrap">
                  <Progress percent={70} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Basic English </span>
                <div className="progress-bar-wrap">
                  <Progress percent={75} progress color="blue"></Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default skills;
