import React from 'react'
import './style.css'
import Logo from '../../assets/logo-white.png'
import Sidebar from './Sidebar'
import ReactFullpage from '@fullpage/react-fullpage';
import './main.css'

const HomePage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
    return (
      <ReactFullpage.Wrapper>
         <div className="section">
         <div class="page">
   <Sidebar />
   <main>
      <div class="content">
         <img src={Logo} id="centerLogo"/>
         <h2>"Leaders Beyond Borders"</h2>
         <h1>The Entrepreneurship Cell</h1>
         <h1>NIT Raipur</h1>
         <button id="esummit" className="btn btn-primary">eSummit 2021 <i style={{fontSize: "21px"}} class="fas fa-arrow-circle-right"></i> </button>

         <button id="next" className="btn btn-outline-danger" onClick={() => fullpageApi.moveSectionDown()}><i style={{fontSize: "21px"}} class="fas fa-arrow-down"></i></button>
      </div>
   </main>
</div>
         </div>

         <div className="section s2">
            <div>
            <p>Next Section...</p>
            </div>
          </div>
      </ReactFullpage.Wrapper>
         
    )
    }}
    />
)

export default HomePage
