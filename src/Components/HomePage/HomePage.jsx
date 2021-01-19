import React from "react";
import Logo from "../../assets/logo-white.png";
import Sidebar from "./Sidebar";
import ReactFullpage from "@fullpage/react-fullpage";
import {Fade, Flip, Slide} from 'react-reveal';

import "./main.css";
import "./style.css";

const HomePage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    navigation={true}
    navigationPosition="left"
    navigationTooltips={[
      "You are on main page",
      "You are on timeline page",
      "You are no where"
    ]}
    showActiveTooltip={false}
    loopBottom={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            
            <div class="page">
              <Sidebar />
              
              <main>
                <div class="content">
                  
                    {/* <img src={Logo} id="centerLogo" /> */}
                    <Fade bottom>
                    
                    <h1>The Entrepreneurship Cell</h1>
                    <h1>NIT Raipur</h1>
                    <h2>Leaders Beyond Borders</h2>
                    
                  </Fade>
                
                  {/* <button id="esummit" className="btn btn-primary">
                    eSummit 2021{" "}
                    <i
                      style={{ fontSize: "21px" }}
                      class="fas fa-arrow-circle-right"
                    ></i>{" "}
                  </button> */}
             
                  <Slide top>
                  <button
                    id="next"
                    className="btn btn-outline-primary"
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <i
                      style={{ fontSize: "21px" }}
                      class="fas fa-arrow-down"
                    ></i>
                  </button>
                  </Slide>
                </div>
              </main>
              {/* social links */}
         
            <div className="social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            
            
            </div>
            
          </div>

          <div className="section s2">
            <div>
              <p>Next Section...</p>
            </div>
          </div>
          <div className="section s2 s3">
            <div>
              <h3>Section 3</h3>
              <button
                className="btn btn-secondary"
                onClick={() => fullpageApi.moveTo(1, 0)}
              >
                Move top
              </button>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default HomePage;
