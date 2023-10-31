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
                Striding forward, carrying the motto of 'Leaders Beyond
                Borders, we at the Entrepreneurship Cell, NIT Raipur,
                aim to give a milieu to nurture innovative ideas.
                E-Summit’23 would be a perfect conglomerate- notion
                of Entrepreneurship, Management and Quizzing to
                bring out the innovator within oneself.
                E-Summit provides a platform for aspiring
                entrepreneurs to interact with some of the alpha geeks
                in the forte and provide the required guidance and get
                the budding entrepreneurs acquainted with the assets
                and liabilities in this field so that their actions don't go
                futile.
                We would ensure that the ideas don't just thrive but
                become the greatest revelations of the country.
                E-Summit’23 will aim at laying a foundation stone for
                developing a perennial start-up culture that would
                surely inspire society to grow and progress.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vision;
