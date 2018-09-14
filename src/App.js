import React, { Component } from 'react';
import Projects from './components/Projects.js';
import GeneralInfo from './components/GeneralInfo.js';
import './css/App.css';
import profile_image from './images/profile_image.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeOpen, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelopeOpen)
library.add(faUserCircle)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header jumbotron">
          <img src={profile_image} alt="" className="profile-image"/>
          <h1>Rebecca Cedermalm</h1>
          <p>Media Technology student</p>
        </header>
        <GeneralInfo/>
        <Projects/>
      </div>
    );
  }
}

export default App;
