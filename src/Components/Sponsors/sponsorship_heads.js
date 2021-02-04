import React, { Component } from 'react';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import HeaderLinks from './header_links';
import Sidebar from '../Home/Sidebar/Sidebar';


class Sponsors extends Component {

    render() {

        return (
            // <div className="sponsors">
            //     <Navbar />
            //     <div className="header4">SPONSORSHIP HEAD CO-ORDINATORS</div>
            //     <div className="container-fluid" style={{ maxWidth: "1200px", paddingTop: "350px" }}>
            //         <HeaderLinks />
            //     </div>

            //     <div className="container-fluid ctn12" style={{ maxWidth: "1600px" }}>

            //         <div className="individual_heads">
            //             <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Rajshree Gavel" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/1W0A5269_-_Rajshree_Gavel_opt_Vg0g4EX.jpg"}></img></div>
            //             <h3 className="spons_hc_name">Rajshree Gavel</h3>
            //             <p className="center"><a className="spons_phone" href="tel:+91 8889830313">+91 8889830313</a></p>
            //             <p className="center"><a className="spons_email" href="mailto:rajshreegavel111@gmail.com">rajshreegavel111@gmail.com</a></p>
            //             <p className="center1"><a href="https://m.facebook.com/people/stream/coworkers/1581298025509378/?referrer_id=100007982796447%20INTRO_CARD_WORK&referrer_type=9&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/rajshree-gavel-059973157"><i className="social fab fa-linkedin"></i></a></p>

            //         </div>

            //         <div className="individual_heads">
            //             <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Mohith Khatri" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/pic1_-_Mohith_Khatri_opt.jpg"}></img></div>
            //             <h3 className="spons_hc_name">Mohith Khatri</h3>
            //             <p className="center"><a className="spons_phone" href="tel:+91 7580800939">+91 7580800939</a></p>
            //             <p className="center"><a className="spons_email" href="mailto:mohithkhatri100@gmail.com">mohithkhatri100@gmail.com</a></p>
            //             <p className="center1"><a href="https://m.facebook.com/profile.php?id=100001201593080&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/mohith-khatri-36403b129"><i className="social fab fa-linkedin"></i></a></p>

            //         </div>

            //         <div className="individual_heads">
            //             <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Yashwi Shah" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/IMG_20190516_212357_680_-_Yashwi_Shah_opt.jpg"}></img></div>
            //             <h3 className="spons_hc_name">Yashwi Shah</h3>
            //             <p className="center"><a className="spons_phone" href="tel:+91 7898556656">+91 7898556656</a></p>
            //             <p className="center"><a className="spons_email" href="mailto:iamyashwi@gmail.com">iamyashwi@gmail.com</a></p>
            //             <p className="center1"><a href="https://m.facebook.com/profile.php?id=100004699122432&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/yashwi-shah-04a042129"><i className="social fab fa-linkedin"></i></a></p>
            //         </div>

            //         <div className="individual_heads">
            //             <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Aayush Shrivastav" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/WhatsApp_Image_2019-07-31_at_9.13.17_PM.jpeg"}></img></div>
            //             <h3 className="spons_hc_name">Aayush Shrivastav</h3>
            //             <p className="center"><a className="spons_phone" href="tel:+91 7999291359">+91 7999291359</a></p>
            //             <p className="center"><a className="spons_email" href="mailto:aayush879@gmail.com">aayush879@gmail.com</a></p>
            //             <p className="center1"><a href="https://www.facebook.com/optimus.ka.baap"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/aayushs879/"><i className="social fab fa-linkedin"></i></a></p>
            //         </div>


            //     </div>

            //     <Footer />
            // </div>

            <div className="whole-spons">
                <Sidebar />
                <div className="container-fluid mainCtn">
                    <div className="spons-header_wrapper spons-headCos_wrapper">
                        <div className="spons-header spons-headCos">
                            Sponsorship Head Co-ordinators
                        </div>
                        <div className="spons-header_border spons-headCos_border"></div>
                    </div>

                    <HeaderLinks />

                    <div className="container-fluid ctn12">
                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Rajshree Gavel" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/1W0A5269_-_Rajshree_Gavel_opt_Vg0g4EX.jpg"}></img></div>
                            <h3 className="spons_hc_name">Rajshree Gavel</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 8889830313">+91 8889830313</a></p>
                            <p className="center"><a className="spons_email" href="mailto:rajshreegavel111@gmail.com">rajshreegavel111@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/people/stream/coworkers/1581298025509378/?referrer_id=100007982796447%20INTRO_CARD_WORK&referrer_type=9&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/rajshree-gavel-059973157"><i className="social fab fa-linkedin"></i></a></p>

                        </div>

                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Mohith Khatri" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/pic1_-_Mohith_Khatri_opt.jpg"}></img></div>
                            <h3 className="spons_hc_name">Mohith Khatri</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 7580800939">+91 7580800939</a></p>
                            <p className="center"><a className="spons_email" href="mailto:mohithkhatri100@gmail.com">mohithkhatri100@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/profile.php?id=100001201593080&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/mohith-khatri-36403b129"><i className="social fab fa-linkedin"></i></a></p>

                        </div>

                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Yashwi Shah" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/IMG_20190516_212357_680_-_Yashwi_Shah_opt.jpg"}></img></div>
                            <h3 className="spons_hc_name">Yashwi Shah</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 7898556656">+91 7898556656</a></p>
                            <p className="center"><a className="spons_email" href="mailto:iamyashwi@gmail.com">iamyashwi@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/profile.php?id=100004699122432&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/yashwi-shah-04a042129"><i className="social fab fa-linkedin"></i></a></p>
                        </div>

                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" height="320" width="320" alt="Aayush Shrivastav" src={"https://ecell.nitrr.ac.in/media/static/uploads/team/WhatsApp_Image_2019-07-31_at_9.13.17_PM.jpeg"}></img></div>
                            <h3 className="spons_hc_name">Aayush Shrivastav</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 7999291359">+91 7999291359</a></p>
                            <p className="center"><a className="spons_email" href="mailto:aayush879@gmail.com">aayush879@gmail.com</a></p>
                            <p className="center1"><a href="https://www.facebook.com/optimus.ka.baap"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/aayushs879/"><i className="social fab fa-linkedin"></i></a></p>
                        </div>

                    </div>

                    <HeaderLinks />
                </div>
                <Footer />
            </div>
        )
    }

}


export default Sponsors;