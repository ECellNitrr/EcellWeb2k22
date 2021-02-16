import React, { Component } from "react";
import faxios from "../../axios";
// import { NavLink } from 'react-router-dom'
import "./startup.css";
import SideBar from "../Home/Sidebar/Sidebar";
import Footer from "../Footer/footer";
import Loader from "../api_loader/api_loader";
// import { Link } from 'react-router-dom'
import Hero from "../../assets/startup.svg";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions/authActions";

class Startup extends Component {
  state = {
    startups: [],
    loading: false,
    inauguration_check: true,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    faxios()
      .get("/events/inauguration/")
      .then((d) => {
        let data = d.data;

        let iportal = data.find((event) => event.name === "iportal");

        if (iportal) {
          this.props.history.push("/");
        } else {
          this.setState({ inauguration_check: false });
        }
      });
  }

  _to_startup = (e) => {
    e.preventDefault();

    if (!this.props.auth.loggedin) {
      document.querySelector("#login-signup-btn").click();
      return;
    }
    this.setState({ loading: true });

    faxios()
      .get(`/iportal/startup/?user=${this.props.auth.id}`)
      .then((d) => {
        const data = d.data;
        console.log(data);

        if (data.count !== 0) {
          const startup_id = data.results[0].id;
          this.props.updateUser({ startup_id });
          this.props.history.push(`/internship/idea/`);
        } else {
          this.props.history.push(`/internship/submit_idea/`);
        }
      });
  };

  _to_jobs = (e) => {
    e.preventDefault();
    console.log("object", this.props.auth);

    if (this.props.auth.loggedin) {
      this.props.history.push("/internship/jobs");
    } else {
      document.querySelector("#login-signup-btn").click();
    }
  };

  ButtonToLinkStartup = () => (
    <button
      style={{ width: "250px", fontSize: "15px",marginBottom: "10px" }}
      className="btn font-weight-bold bg-white round"
      disabled={this.state.loading}
      onClick={this._to_startup}
    >
      For Startups/Ideas
      {this.state.loading ? (
        <i className="fa fa-spinner fa-spin mx-2 d-inline-block"></i>
      ) : null}
    </button>
  );

  ButtonToLinkInterns = () => (
    <button
      style={{ width: "250px", fontSize: "15px" }}
      className="btn font-weight-bold bg-white round"
      onClick={this._to_jobs}
    >
      For Interns
    </button>
  );

  render() {
    let startup_landing_page = (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
          <p className="hero-image-section"><img className="hero" src={Hero} alt="hero"></img></p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
          <div className="register">
            <div className="head1">Welcome to Startup Portal</div>
            <div>{this.ButtonToLinkStartup()}</div>
            <div>{this.ButtonToLinkInterns()}</div>
          </div>
        </div>
      </div>
    );

    if (this.state.inauguration_check) {
      startup_landing_page = <Loader />;
    }

    return (
      <div className="startups">
        <SideBar />
        <div className="container-fluid mainCtn">
          <div className="startup-header_wrapper">
            <div className="startup-header">Startup Portal</div>
            <div className="startup-header_border"></div>
          </div>
          {startup_landing_page}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Startup);
