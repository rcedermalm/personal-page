import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '.././actions/actions';
import PropTypes from 'prop-types';
import Project from './Project.js';
import ProjectModal from './ProjectModal.js';
import '../css/project.css';

class Projects extends Component {

  constructor(props){
    super(props);
    this.props.actions.getProjects();

    this.state = {shows_project_info: false, current_project_in_modal: null};
    this.showProjectInfo = this.showProjectInfo.bind(this);
    this.hideProjectInfo = this.hideProjectInfo.bind(this);
  }

  showProjectInfo(project) {
      document.documentElement.classList.add('modal-open');
      this.setState({shows_project_info: true, current_project_in_modal: project});
  }

  hideProjectInfo() {
      document.documentElement.classList.remove('modal-open');
      this.setState({shows_project_info: false});
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
              <circle  className="type-signal-processing" cx="15" cy="15" r="10" />
            </svg>
          <p className="desc-center">- Signal Processing</p>
          </div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle  className="type-other" cx="15" cy="15" r="10" />
            </svg>
          <p className="desc-center">- Other</p>
          </div>
        </div>
        {this.props.projects.map((item) => (
          <Project key={item.title} project={item} handleOnClick={() => this.showProjectInfo(item)}/>
        ))}
        { this.state.current_project_in_modal !== null ? 
          <ProjectModal show_modal={this.state.shows_project_info} handleClose={this.hideProjectInfo} project={this.state.current_project_in_modal}/>  
        : null}
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
