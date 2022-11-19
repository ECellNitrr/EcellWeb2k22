import React, { Component } from 'react';
import './sponsors.css';
import HC_Contact_Data from './HC_Contact_Data.json';
import faxios from "../../axios";
import Footer from '../Footer/footer';
import HeaderLinks from './header_links';
import Sidebar from '../Home/Sidebar/Sidebar';
import Avatar from '../Team/Avatar';
import './../Team/team.css';

import { baseURL } from './../../axios'
import contact from '../Home/Contact/contact';

class Sponsors extends Component {

    axios = faxios();
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        const year = 2022;

        this.axios.get(`/team/list/${year}/`).then(res => {

            let data = res.data.data.filter((elem) => elem["domain"] == "spons" && elem["member_type"] == "HCO");
            
            
            data.forEach(element => {
                element.domain = "Sponsorship Team"
            });
            
            data = data.map(HC => {
                let contactData = HC_Contact_Data.find(hc => hc.name == HC.name)
                return { ...HC, ...contactData }
            });

            console.log(JSON.stringify(data))
            this.setState({
                data,
                loading: false,
            })
            console.log(this.state)
        })
    }



    render() {
        let HCs = this.state.data;

        let HC_list = HCs.map(HC =>


            <div className="av_box" key={HC.id}>
                <Avatar data={HC}></Avatar>
                <div className="head-info">
                    <p className="center"><a className="spons_phone" href={`tel:+91 ${HC.phone}`}>{HC.phone}</a></p>
                    <p className="center"><a className="spons_email" href={`mailto:${HC.email}`}>{HC.email}</a></p>
                </div>
            </div>

        )

        return (
            <div className="whole-spons">
                <Sidebar />
                <div className="container-fluid mainCtn">
                    <div className="spons-header_wrapper spons-headCos_wrapper">
                        <div className="spons-header spons-headCos">
                            Sponsorship Head Co-ordinators
                        </div>
                        <div className="spons-header_border spons-headCos_border"></div>
                    </div>

                    {/* <HeaderLinks /> */}

                    <div >
                        <div className="photo_container_">
                            {HC_list}

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

{/* <div className="av_box">
                                <Avatar data={{
                                    name: "Shushriya Swarnkar",
                                    image: baseURL+"media/static/uploads/team/DSC_0090__01_am2yQyF.jpg",
                                    facebook: "https://www.facebook.com/shushriya.swarnkar",
                                    linkedin: "https://www.linkedin.com/in/shushriya-swarnkar-aa82a4161/"
                                }}></Avatar>
                                <div className="head-info">
                                    <p className="center"><a className="spons_phone" href="tel:+91 8109647797">+91 8109647797</a></p>
                                    <p className="center"><a className="spons_email" href="mailto:swarnkar.shushriya@gmail.com">swarnkar.shushriya@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="av_box">
                                <Avatar data={{
                                    name: "Aditya Agrawal",
                                    image: baseURL+"media/static/uploads/team/Aditya_Agrawal_TfRiR4b.jpg",
                                    facebook: "https://www.facebook.com/aditya2609",
                                    linkedin: "https://www.linkedin.com/in/aditya-agrawal-655301177/"
                                }}></Avatar>
                                <div className="head-info">
                                    <p className="center"><a className="spons_phone" href="tel:+91 7024594594">+91 7024594594</a></p>
                                    <p className="center"><a className="spons_email" href="mailto:agrawal9393@gmail.com">agrawal9393@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="av_box">
                                <Avatar data={{
                                    name: "Vishisht Pandey",
                                    image: baseURL+"media/static/uploads/team/Vishist_Pandey_tT66n6a.jpg",
                                    facebook: "https://www.facebook.com/vishist.pandey.9",
                                    linkedin: "https://www.linkedin.com/in/vishist-pandey-67a779164/"
                                }}></Avatar>
                                <div className="head-info">
                                    <p className="center"><a className="spons_phone" href="tel:+91 7007342010">+91 7007342010</a></p>
                                    <p className="center"><a className="spons_email" href="mailto:vishistpnd@gmail.com">vishistpnd@gmail.com</a></p>
                                </div>
                            </div> */}