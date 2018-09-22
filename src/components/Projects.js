import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '.././actions/actions';
import PropTypes from 'prop-types';
import Card from './Card.js';
import Modal from './Modal.js';
import '../css/project.css';

class Projects extends Component {

  constructor(props){
    super(props);
    this.props.actions.getProjects();

    this.state = {shows_project_info: false, current_project_in_modal: null, width: 0};
    this.showProjectInfo = this.showProjectInfo.bind(this);
    this.hideProjectInfo = this.hideProjectInfo.bind(this);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getProjectShortInfo = this.getProjectShortInfo.bind(this);
    this.getProjectInfo = this.getProjectInfo.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
      this.setState({...this.state, width: window.innerWidth });
  }

  showProjectInfo(project) {
      document.documentElement.classList.add('modal-open');
      this.setState({...this.state, shows_project_info: true, current_project_in_modal: project});
  }

  hideProjectInfo() {
      document.documentElement.classList.remove('modal-open');
      this.setState({...this.state, shows_project_info: false});
  }

  getProjectShortInfo() {
    let project = this.state.current_project_in_modal;
    let course_info = (project.year !== null) ? 
    <p className="short-project-info">{project.course}, year {project.year}</p> 
    : <p className="short-project-info">{project.course}</p>;

    let short_info = (
      <div>
        {course_info}
        <p className="short-project-info">{project.duration} | Collaborators: {project.nr_collabs}</p>
      </div>)

    return short_info;
  }

  getProjectInfo() {
    let project = this.state.current_project_in_modal;
    let small_screen = this.state.width < 768;

    let has_github = project.github !== "";
    let has_homepage = project.homepage !== "";
    let has_movie = project.movie !== "";

    let link_counter = 0;
    if(has_github)
        link_counter++;
    if(has_homepage)
        link_counter++;
    if(has_movie && small_screen)
        link_counter++;

    let modal_body_max_height = { maxHeight: '65vh' };
    switch(link_counter){
        case 2:
            modal_body_max_height = { maxHeight: '60vh' };
            break;
        case 3:
            modal_body_max_height = { maxHeight: '55vh' };
            break;
        default:
            break;
    }

    let has_atleast_one_link = has_github || has_homepage || (has_movie && small_screen);

    let project_infos = [];
    let counter = 0;
    for(var info_part in project.info){
        project_infos.push(<p key={"info"+counter++}>{project.info[info_part]}</p>);
    }
    let project_info = (<div className="project-info">{project_infos}</div>);

    return (
      <div>
        <div className="project-body" style={modal_body_max_height}>
          <div className="project-info">{project_info}</div>
          <p>Developed skills in: {project.skills_developed}</p>
          { has_movie ?
              <iframe className="project-iframe-movie" title={"Movie: " + project.title} type="text/html" src={project.movie} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              : null} 
        </div>  
        <div className={has_atleast_one_link ? "project-links" : ""}>
          {has_movie ?
              <span className="project-link mobile-movie"><i className="fas fa-film project-link-icon"></i>  <a target="_blank" className={project.type} href={project.movie}>See movie</a></span>
              : null} 
          {has_github ? 
              <span className="project-link"><i className="fab fa-github-square project-link-icon"></i>  <a target="_blank" className={project.type} href={project.github}>Go to repository</a></span>
              : null}  
          {has_homepage ? 
              <span className="project-link"><i className="fas fa-at project-link-icon"></i>  <a target="_blank" className={project.type} href={project.homepage}>Go to homepage</a></span>
              : null}     
        </div> 
      </div>  
    );
  }

  render() {
    return (<div className="projects">
        <h1 className="projects-large-title">Projects</h1>
        <div className="types-of-projects">
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle className="type-graphics" cx="15" cy="15" r="10"/>
            </svg>
          <p className="desc-center">- Graphics</p>
          </div>
          <div className="colour-descriptions">
            <svg className="desc-center" height="30" width="30">
              <circle className="type-webb" cx="15" cy="15" r="10" />
            </svg>
          <p className="desc-center">- Webb</p>
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
          <Card key={item.title} info={item} handleOnClick={() => this.showProjectInfo(item)}/>
        ))}
        { this.state.current_project_in_modal !== null ? 
          <Modal 
            handleClose={this.hideProjectInfo} 
            short_info={this.getProjectShortInfo()}
            info={this.getProjectInfo()}
            show_modal={this.state.shows_project_info} 
            title={this.state.current_project_in_modal.title}
            type={this.state.current_project_in_modal.type}>
          </Modal>
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
