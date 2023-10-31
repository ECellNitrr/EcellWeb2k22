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
              The Entrepreneurship Cell, NIT Raipur also known as
              E-Cell, NIT Raipur is a non-profit organization run by
              the students under the sagacious guidance of the
              management. We are a bunch of self-driven folks who
              strive hard to convert dreamers into doers.
              After having a humble beginning in 2010, we haven’t
              looked back since then. We have successfully expanded
              our networks not only in Chhattisgarh but also in other
              parts of India and have established links with various
              organizations, angel investors and accomplished
              entrepreneurs.
              To help the youth in breaking the shackles of prejudices
              associated with entrepreneurship, we provide them
              with resources such as fresh ideas, mentorship
              programs, workshops by the pioneers of the industry
              and interactive speaker sessions.
              Our flagship event E-Summit has been received with a
              great enthusiasm with speakers from distinct
              backgrounds showing us the path. We give wings to
              ideas by helping them get quick access to seed funding
              which helps the startup stand on its feet.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default about;
