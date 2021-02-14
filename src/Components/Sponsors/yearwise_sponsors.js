import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import faxios from '../../axios';
import Loader from '../api_loader/api_loader'
import Sidebar from '../Home/Sidebar/Sidebar';
// import { reverse } from 'dns';


class Sponsors extends Component {

    axios = faxios()
    state = {
        spons_years: [],
        loading: true
    }

    componentDidMount() {
        this.axios.get('/sponsors/spons_years/').then(res => {

            let data = res.data.spons_year;
            // let data_reverse = data.reverse()
            // console.log(data);
            this.setState({
                spons_years: data,
                loading: false
            })


        })
    }


    render() {

        // console.log(this.state)
        let spons_year_html = this.state.spons_years.map(year => {
            return <div key={year}><Link to={`/sponsors/${year}`}><button className="btn btn-fontSize" >Sponsors {year}</button></Link></div>
        })

        if (this.state.loading) {
            return (<Loader />);
        }
        else {
            return (
                <div className="whole-spons">
                    <Sidebar />
                    <div className="container-fluid mainCtn">
                        {/* <div className="header1">OUR SPONSORS</div> */}
                        <div className="spons-header_wrapper our-sponsors_wrapper">
                            <div className="spons-header our-sponsors">
                                Our Sponsors
                            </div>
                            <div className="spons-header_border our-sponsors_border"></div>
                        </div>

                        {/* <div className="container-fluid ctn11" style={{ marginTop: "-90px" }}>
                            
                        </div> */}
                        <div className="spons-year-list">
                            {spons_year_html}
                        </div>
                    </div>

                    <Footer />
                </div>
            );
        }
    }

}


export default Sponsors;

