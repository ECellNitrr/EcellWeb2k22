import React, { Component } from 'react';

import './caportal.css';
import SideBar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import About from './aboutca';
import Faq from './faqs';
import Contact from './contact';

class caportal extends Component {
  _go_caportal = (e) => {
    this.props.history.push('/caportal');
  };

  render() {
    return (
      <div className="caportal">
        <SideBar />
        <div className="container-fluid mainCtn">
          <div className="cap-header_wrapper">
            <div className="cap-header">CA-Portal</div>
            <div className="cap-header_border"></div>
          </div>
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

export default caportal;
