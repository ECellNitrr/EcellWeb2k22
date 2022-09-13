import React from "react";
import "./vision.css";
import vission from "../../../assets/vision.jpeg";
import { Fade } from "react-reveal";

const vision = () => {
  // document.querySelector("#adforcaModal_toggle").click();
  return (
    <div className="vision">
      <div className="container-fluid ctn-3">
        <div className="vission-heading">
          Our Vision
          <div className="head-line">
            <div className="heading-line"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col3">
            <Fade left>
              <p className="run">
                <img
                  alt="Running Man"
                  className="running-man"
                  src={vission}
                ></img>
              </p>
            </Fade>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <Fade right>
              <p className="text-6">
                The Entrepreneurship cell, NIT Raipur is a non-profit
                organization that advocates to inculcate entrepreneurial spirit
                among the budding young minds who have the ardour to pursue
                entrepreneurship and aggrandize the ideas that have the
                potential to excel. Keeping this ideology in mind, we not only
                provide a platform to young visionary entrepreneurs to share
                their ideas freely with the fellow aspiring companions but also
                help in nurturing their skills by providing them with resources
                and guidance.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vision;
