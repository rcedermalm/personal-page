import React, { Component } from 'react';
import '../css/card.css';

class Card extends Component {

    render() {
      let info = this.props.info;
      return (
          <div className={"w3-card-4 w3-hover-shadow own-card " + info.type} onClick={this.props.handleOnClick}>
            <img className="card-image" src={"https://drive.google.com/uc?id=" + info.image_id} alt=""/>
            <div className="w3-container w3-center">
              <p className="card-title">{info.title}</p>
              <p className="card-course">{info.course}</p>
            </div> 
          </div> 
      );
    }
}
  
export default Card;