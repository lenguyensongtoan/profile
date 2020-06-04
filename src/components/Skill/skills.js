import React, { Component } from 'react';
import AOS from 'aos';
import { Progress } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">HTML</span>
                <div className="progress-bar-wrap">
                  <Progress percent={90} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS</span>
                <div className="progress-bar-wrap">
                  <Progress percent={75} progress color="blue"></Progress>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript</span>
                <div className="progress-bar-wrap">
                  <Progress percent={75} progress color="blue"></Progress>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">Java</span>
                <div className="progress-bar-wrap">
                  <Progress percent={50} progress color="blue"></Progress>
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
