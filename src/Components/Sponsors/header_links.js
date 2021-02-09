import React from 'react';
import { Link } from 'react-router-dom';
import './header_links.css';

const links = () => {
    return (

        <div className="ctn10 link-header_wrapper">
            <div><Link className="links link-header" to="/sponsors/yearwise">Yearwise Sponsors</Link></div>
            {/*<div><a className="links link-header" to="">Sponsorship Gallery</a></div>*/}
            <div><Link className="links link-header link-text" to="/sponsors/sponsors_heads">Contact Spons Team</Link></div>
        </div>


    )
}

export default links