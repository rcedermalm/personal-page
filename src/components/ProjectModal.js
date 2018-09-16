import React, { Component } from 'react';
import '../css/project.css';

class ProjectModal extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const showHideClassName = this.props.show_modal ? "display-block" : "display-none";
        let project = this.props.project;
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

        let project_course = (project.year !== null) ? 
            <p className="project-course">{project.course}, year {project.year}</p> 
            : <p className="project-course">{project.course}</p>;

        let project_infos = [];
        for(var info_part in project.info){
            project_infos.push(<p>{project.info[info_part]}</p>);
        }
        let project_info = (<div className="project-info">{project_infos}</div>)

        return (
            <div className={"modal " + showHideClassName}>
            <div className="outer">
            <div className="middle">
                <section className={"modal-main " + project.type}>
                    <p className="close-btn" onClick={this.props.handleClose}><i className="fas fa-times"></i></p>
                    <p className="project-title">{project.title}</p>
                    {project_course}
                    <p className="project-course"> {project.duration} | Collaborators: {project.nr_collabs} </p>
                    <hr className="modal-separator"/>
                    <div className="modal-body" style={modal_body_max_height}>
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
                </section>
            </div>
            </div>
            </div>
        );
    }
}

export default ProjectModal;