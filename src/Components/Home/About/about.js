import React from "react";
import "./about.css";
import { Fade } from "react-reveal";

const about = () => (
  <div className="about">
    <div className="container-fluid ctn-2">
      <div className="about-heading">
        <div>About Us</div>
        <div className="head-line">
          <div className="heading-line"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 text-center my-auto about-image">
          <Fade left>
            <img
              src={require("../../../assets/about-us.jpeg")}
              alt="tshirts"
              className="fb-img"
            />
          </Fade>
        </div>
        <div className="text-section col-xs-12 col-sm-12 col-md-12 col-lg-7">
          <Fade right>
            <div className="sub-head">WE PROMOTE STARTUPS</div>

            <p className="text-5">
              National Institute of Technology Raipur - Central India’s largest
              Institute believes that Entrepreneurship is the key for our
              nation’s development. The Entrepreneurship Cell is a non-profit
              organization run by the students under the enlightenment of NIT
              Raipur that aims at manifesting the latent entrepreneurial spirit
              of students of NIT Raipur, and other colleges in central India.
              The entrepreneurship cell helps the institution in the pursuit of
              this goal. Its vision is to mature the minds of the youth of NIT
              Raipur. We show them the possible errors and innovative solutions
              in their ideas. This takes them closer to their vision of the
              entrepreneurial journey. We wish to spread awareness about the
              various types of entrepreneurships and give a platform to young
              visionary entrepreneurs to share their ideas freely with the
              fellow aspiring young minds.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default about;
