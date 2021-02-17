import React, { Component } from "react";

import "./caportal.css";
import SideBar from "../Home/Sidebar/Sidebar";
import Footer from "../Footer/footer";
import About from "./aboutca";
import Faq from "./faqs";
import Contact from "./contact";
import { connect } from "react-redux";
import * as actions from "../../actions/authActions";
import AuthModal from "../Form/AuthModal";
class caportal extends Component {
  state = {
    modalOpen: false,
  };

  closeModal = () =>
    this.setState({
      ...this.state,
      modalOpen: false,
    });

  openModal = () =>
    this.setState({
      ...this.state,
      modalOpen: true,
    });

  _go_caportal = (e) => {
    if (!this.props.auth.loggedin) {
      this.openModal();
      return;
    }

    this.props.history.push("/caportal");
  };

  componentDidMount() {
    if (window.localStorage) {
      if (!localStorage.getItem('caLoad')) {
        localStorage['caLoad'] = true;
        window.location.reload();
      } else localStorage.removeItem('caLoad');
    }
  }

  render() {
    return (
      <div className="caportal">
        <SideBar />
        <div className="container-fluid mainCtn">
          <div className="cap-header_wrapper">
            <div className="cap-header">CA-Portal</div>
            <div className="cap-header_border"></div>
          </div>
          <AuthModal
            closeModal={this.closeModal}
            modalOpen={this.state.modalOpen}
          />
          <div className="click-to-button">
            <button onClick={this._go_caportal} className="goto">
              Click me to go to CA Portal
            </button>
          </div>
          <About />
          <Faq />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(caportal);
