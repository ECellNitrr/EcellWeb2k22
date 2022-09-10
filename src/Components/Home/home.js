import React, { useState, useEffect } from "react";

// // libraries
// import ReactFullpage from "@fullpage/react-fullpage";

// components
import Sidebar from "./Sidebar/Sidebar";
import Modal from "./Modal/Modal";
import Timeline from "./Timeline/timeline";

import Vission from "./Vision/vision";

import Contact from "./Contact/contact";
import About from "./About/about";

// animation
import { Fade } from "react-reveal";

// styling
import "./main.css";
import scrollDown from "../../assets/scroll-down.png";

const Home = () => {
  useEffect(() => {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
  }, []);

  return (
    <div className="scrollContainer">
      <Sidebar hideLogo={true} hideLoginSignUpBtn={true} />

      <div className="section mainSection">
        <Sidebar hideMenuBtn={true} />
        <div class="page">
          <main>
            <div class="content">
              <Fade bottom>
                <h1>Entrepreneurship Cell</h1>
                <h1>NIT Raipur</h1>
                <h2>Leaders Beyond Borders</h2>
              </Fade>

              {/* <img
                src={scrollDown}
                onClick={() => fullpageApi.moveSectionDown()}
                id="scroll"
              /> */}
            </div>
          </main>
          {/* social links */}

          <div className="social">
            <a
              href="https://www.facebook.com/ecellnitrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCrlm4gpLnIaA3pKSXbB99Yw"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/ecell.nitraipur/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Ecellnitrr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="section s1">
        <About />
      </div>

      <div className="section s2">
        <Vission />
      </div>

      <div className="section s3">
        <Timeline />
      </div>

      <div className="section s4">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
