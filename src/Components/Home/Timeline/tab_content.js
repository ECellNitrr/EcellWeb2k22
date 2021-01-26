import React, { Component } from "react";
import "./timeline.css"

class TabContent extends Component {

    render() {
        return (
            (this.props.isActive) ? (<div className="tab-content tab-content-active">
                <div className="plant-wrapper tab-col">
                    <img className="plant-img" src={this.props.img}></img>
                </div>
                <div className="tl-data tab-col">
                    <div className="tl-header_wrapper tl-year">
                        <div className="tl_header">
                            {this.props.year}
                        </div>
                        <div className="tl-header_border"></div>
                    </div>
                    <div className="tl-details">
                        {this.props.children}
                    </div>
                </div>
            </div>) : (<div className="tab-content">
                <div className="plant-wrapper tab-col">
                    <img className="plant-img" src={this.props.img}></img>
                </div>
                <div className="tl-data tab-col">
                    <div className="tl-header_wrapper tl-year">
                        <div className="tl_header">
                            {this.props.year}
                        </div>
                        <div className="tl-header_border"></div>
                    </div>
                    <div className="tl-details">
                        {this.props.children}
                    </div>
                </div>
            </div>)
        );
    }
}

export default TabContent;