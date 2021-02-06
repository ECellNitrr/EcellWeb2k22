import React, { Component } from "react";
import "./sponsors.css";
import faxios from "../../axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import HeaderLinks from "./header_links";
import Loader from '../api_loader/api_loader';
import Sidebar from "../Home/Sidebar/Sidebar";
import SponsorsTabs from "./sponsors_tabs";
// import { createCoverageSummary } from "istanbul-lib-coverage";

class Sponsors extends Component {
    axios = faxios();
    state = {
        sponsors: {},
        loading: true,
        year: null
    };

    componentDidMount() {
        const year = this.props.match.params.year;
        this.axios.get(`/sponsors/sorted_list/${year}/`).then(res => {

            let data = res.data.data;
            console.log(data)
            this.setState({
                sponsors: data,
                loading: false,
                year: year
            })
        })
    }

    render() {
        const sponsors = this.state.sponsors
        let sponsors_html = Object.keys(sponsors).map(category => {
            const sponsors_list = sponsors[category].map(sponsor =>
                <div key={sponsor.id}>

                    <div className="col m-1" key={sponsor.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={sponsor.name}
                                    className="spons-Image"
                                    src={sponsor.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {sponsor.name}
                                    </h6>
                                    <p className="ph-no">{sponsor.contact}</p>
                                    <p>{sponsor.details}</p>
                                    <p>
                                        <a className="web" href={sponsor.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            return <div className="my-5">
                <div style={{ marginBottom: "20px" }} className="team-year sponsType-header">{category}&nbsp; Sponsors</div>
                <div className="ctn9">{sponsors_list}</div>
            </div>
        });

        let titleSpons = sponsors["Title"];
        let titleSponsHTML = [];
        if (titleSpons != undefined) {
            titleSpons.forEach(tSpon => {
                titleSponsHTML.push(<div key={tSpon.id}>

                    <div className="col m-1" key={tSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={tSpon.name}
                                    className="spons-Image"
                                    src={tSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {tSpon.name}
                                    </h6>
                                    <p className="ph-no">{tSpon.contact}</p>
                                    <p>{tSpon.details}</p>
                                    <p>
                                        <a className="web" href={tSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });

            titleSponsHTML = (<div className="my-5">
                <div style={{ marginBottom: "20px" }} className="team-year sponsType-header">Title Sponsors</div>
                <div className="ctn9">{titleSponsHTML}</div>
            </div>);
        }

        return (
            <div className="whole-spons">
                <Sidebar></Sidebar>
                <div className="mainCtn">
                    {this.state.loading ? (
                        <Loader style={{ margin: "0px auto" }} />
                    ) : (
                            <div className="sponsCtn">
                                <div className="spons-header_wrapper header-withYear_wrapper">
                                    <div className="spons-header header-withYear">
                                        Sponsors {this.state.year}
                                    </div>
                                    <div className="spons-header_border header-withYear_border"></div>
                                </div>
                                <HeaderLinks />
                                {/* { sponsors_html} */}
                                {titleSponsHTML}
                                <SponsorsTabs sponsData={sponsors} />
                                <HeaderLinks />
                            </div>
                        )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
