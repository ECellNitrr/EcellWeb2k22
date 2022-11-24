import React, { Component } from "react";
import "./GovernmentSchemes.css";
import faxios from "../../axios";

class GovernmentSchemes extends Component {
    axios = faxios();
    state = {
        sponsors: {},
        loading: true,
        year: null
    };

    componentDidMount() {
        
    }

    render() {
        return <div>Under work</div>
    }
}

export default GovernmentSchemes;
