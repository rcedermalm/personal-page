import React, { Component } from 'react';
import Projects from './components/Projects.js';
import GeneralInfo from './components/GeneralInfo.js';
import './css/App.css';
import profile_image from './images/profile_image.png';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header jumbotron">
          <img src={profile_image} alt="" className="profile-image"/>
          <h1>Rebecca Cedermalm</h1>
          <h2>Media Technology student</h2>
        </header>
        <GeneralInfo/>
        <Projects/>
        <div className="footer">   
          <Container className="footer-body">
            <Row>
              <Col className="footer-column">
                <p>Great work! You have made it to the end of my homepage. Have some cake to celebrate!</p>
                <p>Hopefully you learned something new about me and I am thanking you for taking your time looking though all of this. Feel free to contact me if you have any questions.</p>
              </Col>
              <Col className="footer-column">
              <i class="fas fa-birthday-cake cake-icon align-middle"></i> 
              </Col>
            </Row>
          </Container>
          <p className="copyright">© Rebecca Cedermalm</p>  
        </div>
      </div>
    );
  }
}

export default App;
