import React, { Component } from "react";
import "./contact.css";
import faxios from "../../../axios";
import BtnLoader from "../../Form/loader";
import { Link } from "react-router-dom";
export default class contact extends Component {
  state = {
    err: false,
    success: false,
    loader: false,
    errmsg: "",
  };

  _submit = (e) => {
    e.preventDefault();
    this.setState({
      success: false,
      err: false,
      loader: true,
    });

    if (this.your_name.value.length < 1) {
      this.setState({
        success: false,
        err: true,
        errmsg: "Name is required",
        loader: false,
      });
      return;
    }

    if (this.email.value.length < 1) {
      this.setState({
        success: false,
        err: true,
        errmsg: "Email is required",
        loader: false,
      });
      return;
    }

    let email_value = this.email.value;

    let verify_email = (email) => {
      let re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
    };

    if (verify_email(email_value) === false) {
      this.setState({
        success: false,
        err: true,
        errmsg: "Email is invalid",
        loader: false,
      });
      return;
    }

    if (this.message.value.length < 10) {
      this.setState({
        success: false,
        err: true,
        errmsg: `Atleast 10 characters are required in your message, you are currently using ${this.message.value.length} characters `,
        loader: false,
      });
      return;
    }

    if (this.message.value.length > 100) {
      this.setState({
        success: false,
        err: true,
        errmsg: `You can only send 100 chars max, currently you are using ${this.message.value.length} chars `,
        loader: false,
      });
      return;
    }

    faxios()
      .post("/feedback/post/", {
        name: this.your_name.value,
        email: this.email.value,
        message: this.message.value,
      })
      .then((res) => {
        console.log(res);

        this.your_name = "";
        this.email = "";
        this.message = "";

        this.setState({
          success: true,
          err: false,
          loader: false,
        });
      })
      .catch((res) => {
        console.log(res);
        this.setState({
          success: false,
          err: true,
          loader: false,
          errmsg: "Something went wrong, please try later.",
        });

        setTimeout(() => {
          this.setState({
            err: false,
            success: false,
            loader: false,
            errmsg: "",
          });
        }, 3000);
      });
  };

  contactUs(errrmsg, scsmsg) {
    return (
      <>
        <div className="con-sub-head">Leave a Message</div>
        {this.state.err ? errrmsg : null}
        {this.state.success ? scsmsg : null}
        <form>
          <div>
            <input
              ref={(ele) => (this.your_name = ele)}
              type="text"
              name="Name"
              id="visitor-name"
              placeholder="Your Name"
            ></input>
          </div>
          <div>
            <input
              ref={(ele) => (this.email = ele)}
              id="visitor-email"
              type="email"
              placeholder="Your Email"
            ></input>
          </div>
          <div>
            <textarea
              ref={(ele) => (this.message = ele)}
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button onClick={this._submit} className="submit" type="submit">
              {this.state.loader ? <BtnLoader /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </>
    );
  }

  footerSection() {
    return (
      <>
        <div className="con-sub-head">
          <div></div>To learn is to grow.
          <div>To innovate is to Pioneer.</div>
          <div>To be an entrepreneur is to be a leader.</div>
        </div>
        <p className="summary">
          E-Cell, NIT Raipur is established to motivate and educate people about
          entrepreneurship and serve as a meeting ground for corporate and young
          budding entrepreneurs from distinguished institutions.
        </p>
        <div className="mobile-number">
          <div className="oc-contact">
            <p className="oc-name">Aditya Singh</p>
            <a href="tel:9174452784">+91 91744 52784</a>
          </div>
          <div className="oc-contact">
            <p className="oc-name">Sumit Chatterjee</p>
            <a href="tel:7417566851">+91 91744 52784</a>
          </div>
        </div>
        <div className="legal">
          <Link to="/terms">Terms and Conditions</Link>
          <br></br>
          <Link to="/policy">Privacy Policy</Link>
        </div>
        <div className="social-icons">
          <div>Follow us Online On</div>
          <a
            href="https://www.facebook.com/ecellnitrr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/ecell_nitrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCrlm4gpLnIaA3pKSXbB99Yw"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-youtube-square"></i>
          </a>
          <a
            href="https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ecell.nitraipur/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>
      </>
    );
  }

  render() {
    const errrmsg = (
      <div className="my-3 text-danger font-weight-bold text-center">
        {this.state.errmsg}
      </div>
    );
    const scsmsg = (
      <div className="my-3 text-success font-weight-bold text-center">
        Your message is successfully received.
      </div>
    );

    return (
      <div className="container-fluid ctn-6">
        <div className="contact-heading">
          Contact Us
          <div>
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="row contact-row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-6 form-section"
            style={{ textAlign: "center" }}
          >
            {this.contactUs(errrmsg, scsmsg)}
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-6 info-section"
            style={{ textAlign: "center" }}
          >
            {this.footerSection()}
          </div>
        </div>
      </div>
    );
  }
}
