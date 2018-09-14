import React, { Component } from 'react';
import '../css/general_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'reactstrap';

class GeneralInfo extends Component {

    render() {
      return (<div className="general-info-body">
        <Container>
        <Row>
          <Col className="info-block">
              <FontAwesomeIcon className="fa-icon" icon="user-circle" size="5x"/>
              <div className="info-text">
              <p>
              My name is Rebecca Cedermalm and I am currently studying my fifth and last year at the Master of Science in Media Technology and Engingeering program at Linkoping University.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Apart from that, I love to spend my time watching movies (I heart cinema) and using my hands doing something creative like painting or photographing. 
              </p>
              </div>
          </Col>
          <Col className="info-block">
                <i className="fas fa-question-circle fa-icon"/>
                <div className="info-text">
                <p>
                  So, what is this?
                  My intentions with this page is a way for me and my future employers to keep track on what I have done during my time at the University and afterwards. 
                  A trip down memory lane in the form of an extended resumé, so to speak.
                </p>
                </div>

                <FontAwesomeIcon className="fa-icon second-icon" icon="envelope-open" size="5x"/>
                <div className="info-text">
                <p>
                  If you have an interesting summer or extra job you would think I would be suitable for, I am all ears. I would love to hear from you. You can 
                  find my <a className="info-link" href="documents/CV.pdf">C.V. here</a>.
                </p>
                <p>
                  If you want to get in touch with me you can always email me at rebecca@cedermalm.se.
                </p>
                <p>
                  <i className="fab fa-linkedin fa-small-i-icon"/> <a className="info-link" href="https://se.linkedin.com/in/rebecca-cedermalm-76a769113">Rebecca Cedermalm</a>
                </p>
                <p>
                  <i className="fab fa-github-square fa-small-i-icon"/> <a className="info-link" href="https://github.com/rcedermalm">rcedermalm </a>
                </p>
                </div>
          </Col>
        </Row>
        </Container>
        </div>
      );
    }
}

export default GeneralInfo;