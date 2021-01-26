import React, { Component } from "react";
import "./timeline.css"

class TabHeader extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.tabId);
    }

    render() {
        return (
            (this.props.isActive) ? (
                <div className="tab-header-cover active-border" onClick={this.onClick}>
                    <div className="tab-header">
                        {this.props.title}
                    </div>
                    <div className="tl-header_border"></div>
                </div>) :
                (<div className="tab-header-cover" onClick={this.onClick}>
                    <div className="tab-header">
                        {this.props.title}
                    </div>
                </div>)
        );
    }
}

export default TabHeader;