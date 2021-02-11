import React, { Component } from "react";
import axios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import './gallery.css';
import Loader from '../api_loader/api_loader'
import Sidebar from "../Home/Sidebar/Sidebar";
import ImgCard from "./img_card";
import DummyImgCard from "./dummy_img_card";


class gallery_imgs extends Component {
    state = {
        pic: [],
        photos: [],
        year_name: "",
        success: false,
        loading: true,
        nofColumns: 0,
        isModalActive: false,
        imgIndex: 0
    }

    constructor(props) {
        super(props);
        this.onImgClick = this.onImgClick.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    getNoofCols() {
        let nofCols = 0;
        // if (window.innerWidth <= 300) {
        //     nofCols = 1;
        // }
        // else if (window.innerWidth <= 700) {
        //     nofCols = 2;
        // }
        // else if (window.innerWidth <= 1100) {
        //     nofCols = 3;
        // }
        // else if (window.innerWidth <= 1400) {
        //     nofCols = 4;
        // }
        // else {
        //     nofCols = 5;
        // }
        // return nofCols;
        // if (window.innerWidth <= 300) {
        //     nofCols = 1;
        // }
        // else
        if (window.innerWidth <= 700) {
            nofCols = 1;
        }
        else if (window.innerWidth <= 1100) {
            nofCols = 2;
        }
        else if (window.innerWidth <= 1400) {
            nofCols = 3;
        }
        else {
            nofCols = 4;
        }
        return nofCols;
    }

    componentDidMount() {
        let year_gallery = this.props.match.params.name;
        this.setState({
            year_name: year_gallery
        })
        axios().get('/gallery/list/').then(res => {
            let year_pics = res.data.gallery;
            let curent_year_pic = year_pics[year_gallery];
            // console.log(curent_year_pic);

            curent_year_pic.forEach(ele => {
                this.state.photos.push({
                    thumbnail: ele.small,
                    original: ele.big
                })
            });
            console.log(this.state.photos);
            let nofCols = this.getNoofCols();

            this.setState({
                success: true,
                loading: false,
                nofColumns: nofCols
            })

            // if (this.state.success) {
            //     // document.querySelector('.image-gallery-play-button').click();
            //     // document.querySelector('.image-gallery-play-button').click();

            // }
        });

        window.addEventListener('resize', () => {
            let nofCols = this.getNoofCols();
            // console.log(window.innerWidth);
            if (this.state.nofColumns != nofCols) {
                // console.log(window.innerWidth + " " + nofCols);
                this.setState({
                    nofColumns: nofCols
                });
            }
        });
    }

    onImgClick(imgIndex) {
        this.setState({
            imgIndex: imgIndex,
            isModalActive: true
        });
    }

    onCloseModal() {
        this.setState({
            isModalActive: false
        });
    }

    render() {
        let imgCardsHtml = [];
        if (this.state.nofColumns > 0) {
            let imgCols = [];
            let nofCols = this.state.nofColumns;
            for (let i = 0; i < nofCols; i++) {
                let tmpImgCol = [];
                if (i % 2 == 1) {
                    tmpImgCol.push(
                        <DummyImgCard />
                    );
                }
                imgCols.push(tmpImgCol);
            }

            for (let i = 0; i < this.state.photos.length; i++) {
                imgCols[i % nofCols].push(<ImgCard imgIndex={i} onClick={this.onImgClick} imgSrc={this.state.photos[i].original}></ImgCard>);
            }

            for (let i = 0; i < nofCols; i++) {
                let imgCol = <div>
                    {imgCols[i]}
                </div>
                imgCardsHtml.push(imgCol);
            }
        }

        if (this.state.loading) {
            return (<Loader />);
        }
        else {

            return (
                <div className="whole-gallery">
                    <Sidebar />

                    <div className="team-img">
                        <div className="team-img_wrapper">
                            <div className="gal-header_wrapper  gal-yearwise-header_wrapper">
                                <div className="gal-header  gal-yearwise-header">
                                    Gallery of {this.state.year_name}
                                </div>
                                <div className="gal-header_border  gal-yearwise-header_border"></div>
                            </div>
                        </div>
                    </div>

                    <div className="img-cards_wrapper">
                        <div className="img-cards">
                            {imgCardsHtml}
                        </div>
                    </div>

                    {this.state.isModalActive ? (<div className="img-modal modal-active">
                        <div className="img-modal-controllers">
                            <div className="img-modal-btn" onClick={this.onCloseModal}>
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <img src={this.state.photos[this.state.imgIndex].original}></img>
                    </div>) : (<div className="img-modal modal-inactive"></div>)}
                    <Footer />
                </div>
            )
        }
    }
}

export default gallery_imgs;