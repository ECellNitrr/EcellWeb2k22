import React, { Component } from "react";
import './sponsors_tabs.css';

class SponsorsTabs extends Component {
    render() {
        let platinumSpons = this.props.sponsData["Platinum"];
        let platinumSponsHTML = [];
        if (platinumSpons != undefined) {
            platinumSpons.forEach(pSpon => {
                platinumSponsHTML.push(<div key={pSpon.id}>

                    <div className="col m-1" key={pSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={pSpon.name}
                                    className="spons-Image"
                                    src={pSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {pSpon.name}
                                    </h6>
                                    <p className="ph-no">{pSpon.contact}</p>
                                    <p>{pSpon.details}</p>
                                    <p>
                                        <a className="web" href={pSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        let goldSpons = this.props.sponsData["Gold"];
        let goldSponsHTML = [];
        if (goldSpons != undefined) {
            goldSpons.forEach(gSpon => {
                goldSponsHTML.push(<div key={gSpon.id}>
                    <div className="col m-1" key={gSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={gSpon.name}
                                    className="spons-Image"
                                    src={gSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {gSpon.name}
                                    </h6>
                                    <p className="ph-no">{gSpon.contact}</p>
                                    <p>{gSpon.details}</p>
                                    <p>
                                        <a className="web" href={gSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        let partnerSpons = this.props.sponsData["Partner"];
        let partnerSponsHTML = [];
        if (partnerSpons != undefined) {
            partnerSpons.forEach(pSpon => {
                partnerSponsHTML.push(<div key={pSpon.id}>

                    <div className="col m-1" key={pSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={pSpon.name}
                                    className="spons-Image"
                                    src={pSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {pSpon.name}
                                    </h6>
                                    <p className="ph-no">{pSpon.contact}</p>
                                    <p>{pSpon.details}</p>
                                    <p>
                                        <a className="web" href={pSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        return (
            <div className="spons-tabs_wrapper">
                <div className="spons-tab-header_wrapper">
                    <div className="spons-header_wrapper platinum-head_wrapper spons-type-head_wrapper">
                        <div className="spons-header platinum-head">
                            Platinum
                        </div>
                        <div className="spons-header_border platinum-head_border"></div>
                    </div>

                    <div className="spons-header_wrapper gold-head_wrapper spons-type-head_wrapper">
                        <div className="spons-header gold-head">
                            Gold
                        </div>
                        <div className="spons-header_border gold-head_border"></div>
                    </div>

                    <div className="spons-header_wrapper partner-head_wrapper spons-type-head_wrapper">
                        <div className="spons-header partner-head">
                            Partner
                        </div>
                        <div className="spons-header_border partner-head_border"></div>
                    </div>

                </div>
                <div className="spons-tab-contents-ctn">
                    <div className="spons-tab-contents-cover">
                        <div className="spons-tab-content_wrapper">
                            <div className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {platinumSponsHTML}
                                </div>
                            </div>
                            <div className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {goldSponsHTML}
                                </div>
                            </div>
                            <div className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {partnerSponsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SponsorsTabs;