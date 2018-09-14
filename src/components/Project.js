import React, { Component } from 'react';
import '../css/project.css';

class Project extends Component {

    render() {
      let project = this.props.project;
      return (
          <div className={"w3-card-4 w3-hover-shadow project " + project.type} onClick={this.props.handleOnClick}>
            <img className="project-image" src={"https://drive.google.com/uc?id=" + project.image_id} alt=""/>
            <div className="w3-container w3-center">
              <p className="project-title">{project.title}</p>
              <p className="project-course">{project.course}</p>
            </div> 
          </div> 
      );
    }
}
  
export default Project;