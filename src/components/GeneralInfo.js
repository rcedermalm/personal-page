import React, { Component } from 'react';
import '../css/general_info.css';
import { Container, Row, Col } from 'reactstrap';

class GeneralInfo extends Component {

    render() {
      return (<div className="general-info-body">
        <Container>
        <Row>
          <Col className="info-block">
              <i className="fas fa-user-circle fa-icon"></i>
              <div className="info-text">
              <p>              
                My name is Rebecca Cedermalm and I am a girl born 1995 with a passion for computer graphics. 
                I am currently studying my fifth and last year at the Master of Science program of Media 
                Technology at Linkoping University in Sweden. The short version of what the program contains is: 
                programming, computer graphics and information visualization combined with the regular engineering parts. 
                The reason I chose Media Technology is the unique combination of maths and creative visualisations.
              </p>
              <p>
                During my free time I love to spend my time reading, watching movies or creating something fun visually. 
                The fun part can be everything between a splash of paint on a canvas to hobby projects using code. 
              </p>
              <p>
                My dream work place is at a company where I have the change to learn and implement new techniques, preferably 
                in the film or game industry.
              </p>
              </div>
          </Col>
          <Col className="info-block">
                <i className="fas fa-question-circle fa-icon"/>
                <div className="info-text">
                <p>
                  So, what is this page?
                  My intentions with this page is a way for myself and my future employers to keep track on what 
                  I have done during my years in the technology field. A trip down memory lane in the form of an 
                  extended resumé, so to speak.
                </p>
                </div>
 
                <i className="fas fa-address-card fa-icon"></i>
                <div className="info-text">
                <p>
                  If you find anything here interesting or just want to chat, 
                  you can reach me in the following ways:
                </p>
                <div className="general-links">
                <p>
                <i className="fas fa-envelope fa-small-i-icon"/> <a className="info-link" href="mailto:rebecca@cedermalm.se">rebecca@cedermalm.se</a>
                </p>
                <p>
                  <i className="fab fa-linkedin fa-small-i-icon"/> <a className="info-link" href="https://se.linkedin.com/in/rebecca-cedermalm-76a769113" target="_blank" rel="noopener noreferrer">Rebecca Cedermalm</a>
                </p>
                <p>
                  <i className="fab fa-github-square fa-small-i-icon"/> <a className="info-link" href="https://github.com/rcedermalm" target="_blank" rel="noopener noreferrer">rcedermalm</a>
                </p>
                </div>
                </div>
          </Col>
        </Row>
        </Container>
        </div>
      );
    }
}

export default GeneralInfo;