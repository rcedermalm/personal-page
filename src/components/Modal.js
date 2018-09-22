import React, { Component } from 'react';
import '../css/modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e){
        if(!this.node.contains(e.target))
            this.props.handleClose();
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const showHideClassName = this.props.show_modal ? "display-block" : "display-none";
        
        return (
            <div className={"modal " + showHideClassName}>
                <div className="outer">
                    <div className="middle">
                        <div ref={node => this.node = node} className={"modal-main " + this.props.type}>
                            <p className="close-btn" onClick={this.props.handleClose}><i className="fas fa-times"></i></p>
                            <p className="modal-title">{this.props.title}</p>
                            <div className="modal-short-info"> {this.props.short_info} </div>
                            <hr className="modal-separator"/>
                            <div className="modal-info">{this.props.info}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;