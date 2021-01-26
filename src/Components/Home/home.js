import React from 'react';

// libraries 
import ReactFullpage from '@fullpage/react-fullpage';

// components
import Sidebar from './Sidebar/Sidebar';
import Timeline from './Timeline/timeline';

// animation
import { Fade } from 'react-reveal';

// styling
import './main.css';
import scrollDown from '../../assets/scroll-down.png';

const Home = () => (
  <div>
    <Sidebar />
    <ReactFullpage
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      navigationTooltips={[
        'You are on main page',
        'You are on timeline page',
        'You are no where',
      ]}
      showActiveTooltip={false}
      loopBottom={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div class="page">
                <main>
                  <div class="content">
                    <Fade bottom>
                      <h1>Entrepreneurship Cell</h1>
                      <h1>NIT Raipur</h1>
                      <h2>Leaders Beyond Borders</h2>
                    </Fade>

                    <img
                      src={scrollDown}
                      onClick={() => fullpageApi.moveSectionDown()}
                      id="scroll"
                    />
                  </div>
                </main>
                {/* social links */}

                <div className="social">
                  <a href="https://www.facebook.com/ecellnitrr" target="_blank">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCrlm4gpLnIaA3pKSXbB99Yw" target="_blank">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/entrepreneurship-cell-nit-raipur/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/ecell.nitraipur/?hl=en" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://github.com/Ecellnitrr/" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="section s1">
              <h3>About Us</h3>
            </div>

            <div className="section s2">
              <h3>Our Vision</h3>
            </div>

            <div className="section s3">
              <Timeline/>
            </div>

            <div className="section s4">
                <h3>Contact us</h3>
                <button
                  className="btn btn-secondary"
                  onClick={() => fullpageApi.moveTo(1, 0)}
                >
                  Move top
                </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);

export default Home;
