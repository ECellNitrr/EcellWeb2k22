import React, { Component } from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Sidebar from '../Home/Sidebar/Sidebar';


class gallery extends Component {

    render() {

        return (
            <div className="whole-gallery">
                <Sidebar />

                <div className="container-fluid mainCtn">
                    <div className="gal-header_wrapper">
                        <div className="gal-header">
                            Gallery
                            </div>
                        <div className="gal-header_border"></div>
                    </div>
                    
                    <div className="yearWise-gal-link"><Link to="gallery/E-Summit'22"><button className="yearWise-gal-linkBtn">GALLERY OF E-SUMMIT'22</button></Link></div>
                    <div className="yearWise-gal-link"><Link to="gallery/E-Summit'19"><button className="yearWise-gal-linkBtn">GALLERY OF E-SUMMIT'19</button></Link></div>
                    <div className="yearWise-gal-link"><Link to="gallery/E-Summit'18"><button className="yearWise-gal-linkBtn">GALLERY OF E-SUMMIT'18</button></Link></div>
                    <div className="yearWise-gal-link"><Link to="gallery/E-Summit'17"><button className="yearWise-gal-linkBtn">GALLERY OF E-SUMMIT'17</button></Link></div>
                    <div className="yearWise-gal-link"><Link to="gallery/E-Summit'16"><button className="yearWise-gal-linkBtn">GALLERY OF E-SUMMIT'16</button></Link></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default gallery;