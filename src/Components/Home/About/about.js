import React from 'react';
import './about.css';

const about=()=> (<div className="about">
    <div className="container-fluid ctn-2">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="about-heading">
                    <div>About Us</div>
                    <div className="head-line">
                        <div className="heading-line"></div>
                    </div>
                </div>
                <div className="text-section">
                    <div className="sub-head">WE PROMOTE STARTUPS</div>
                    <p className="text-5">The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come.Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas, funding mentoring, other mentorship programs, workshops to help them organize their strategy and frequent, highly interactive speaker sessions and lecture series.</p>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center my-auto about-image">
                <img src={require('../../../assets/about-us.jpg')} alt="tshirts" className='fb-img' />
            </div>
        </div>
    </div>
</div>)

export default about;