import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import '../css/project.css';


class Project extends Component {

    constructor(props) {
      super(props);
      this.toggleInfo = this.toggleInfo.bind(this);
      this.state = {shows_info: false};
    }

    toggleInfo(){
      this.setState({shows_info: !this.state.shows_info});
    }

    render() {
      let project = this.props.projects[this.props.index];

      const content = this.state.shows_info ? (
        <div className="info-showing">
          <p className="project-title">{project.title}</p>
          <p className="project-course">{project.course}</p>
          <p className="project-info">{project.info}</p>
        </div> 
      ) : ( 
        <div>
          <img className="project-image" src={"https://drive.google.com/uc?id=" + project.image_id} alt=""/>
          <div className="w3-container w3-center">
            <p className="project-title">{project.title}</p>
            <p className="project-course">{project.course}</p>
          </div> 
        </div>
      );

      return (
        <div className={"w3-card-4 w3-hover-shadow project " + project.type} onClick={this.toggleInfo}>
          {content}  
        </div> 
      );
    }
}

Project.propTypes = {
  actions: PropTypes.object,
  projects: PropTypes.array
};

function mapStateToProps(state) {
  return {
    projects: state.projectReducer.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);