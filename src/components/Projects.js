import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '.././actions/actions';
import PropTypes from 'prop-types';
import Project from './Project.js';
import '../css/project.css';

class Projects extends Component {

  constructor(props){
    super(props);
    this.props.actions.getProjects();
  }

  render() {
    return (<div className="projects">
        <h1 className="projects-large-title">Projects</h1>
        <div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle className="type-webb" cx="15" cy="15" r="10" />
            </svg>
          <p className="desc-center">- Webb</p>
          </div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle className="type-graphics" cx="15" cy="15" r="10"/>
            </svg>
          <p className="desc-center">- Graphics</p>
          </div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle className="type-game" cx="15" cy="15" r="10"/>
            </svg>
          <p className="desc-center">- Game</p>
          </div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle  className="type-imaging" cx="15" cy="15" r="10" />
            </svg>
          <p className="desc-center">- Image Processing</p>
          </div>
        </div>
        {this.props.projects.map(function(name, index){
            return <Project key={index} index={index}/>;
        })}
        </div>
    );
  }
}

Projects.propTypes = {
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
)(Projects);
