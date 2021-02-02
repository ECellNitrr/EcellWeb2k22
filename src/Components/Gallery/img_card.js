import React, { Component } from "react";
import './img_card.css';
import './gallery.css';

class ImgCard extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.imgIndex);
    }

    render() {
        return (
            <div className="img-card_wrapper card-shadow" onClick={this.onClick}>
                <img src={this.props.imgSrc} />
            </div>
        );
    }
}

export default ImgCard;