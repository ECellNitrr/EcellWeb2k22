import React, { Component } from "react";
import faxios from "../../axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Loader from '../api_loader/api_loader'
import './events.css'
import BtnLoader from '../Form/loader'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'
import Sidebar from "../Home/Sidebar/Sidebar";
import AuthModal from "../Form/AuthModal";
class event_detail extends Component {
    state = {
        event_detail: null,
        loading: true,
        register: false,
        btnloader: false,
        people_registered: 0,
        modalOpen: false,
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    closeModal = () =>
    this.setState({
      ...this.state,
      modalOpen: false,
    });

    openModal = () => this.setState({
      ...this.state,
      modalOpen: true,
    })


    componentDidMount() {
        this.event_id = this.props.match.params.id;

        faxios().get("/events/list/2019/").then(d => {
            let data = d.data.data;
            let event_detail = data.find(event => event.id === Number(this.event_id))
            let register_status = event_detail["registered"]
            let people_registered = event_detail["no_of_ppl_registered"]
            this.setState({
                event_detail,
                loading: false,
                register: register_status,
                people_registered: people_registered
            });
        });
    }


    _event_register = e => {
        e.preventDefault()

        this.setState({
            btnloader: true
        })

        if (this.props.auth.loggedin) {
            if (this.props.auth.verified) {

                faxios().post(`/events/register/${this.props.match.params.id}/`).then(res => {
                    console.log(res);
                    let total_registrations = this.state.people_registered;
                    this.setState({
                        register: true,
                        btnloader: false,
                        people_registered: (total_registrations + 1)
                    })

                }).catch(res => {
                    console.log(res)
                    this.setState({
                        btnloader: false
                    })
                })

            } else {
                alert("Please verify your phone number before registration. To do the same click on your name.")
                this.setState({
                    btnloader: false
                })
            }
        } else {
            this.openModal();
            this.setState({
                btnloader: false
            });
        }

    }

    _event_unregister = e => {
        e.preventDefault()
        this.setState({
            btnloader: true
        })

        faxios().post(`/events/unregister/${this.props.match.params.id}/`).then(res => {
            let total_registrations = this.state.people_registered;
            this.setState({
                register: false,
                btnloader: false,
                people_registered: (total_registrations - 1)
            })


        }).catch(res => {
            this.setState({
                btnloader: false
            })
        })

    }


    render() {
        let event_detail = null
        if (!this.state.loading) {
            const event = this.state.event_detail;
            event_detail = (
                <div className="event_detail container">

                    <div className="event-item1">
                        <img className="shadow-lg bg-white rounded event-detail-pic" width="400" height="400" alt={event.name} src={event.icon} />
                    </div>
                    <div className="event-item2">
                        <div className="event-content">
                        <AuthModal closeModal={this.closeModal} modalOpen={this.state.modalOpen}/>
                            <div className="event-detail-name"><h4 className="e-name shadow p-3 mb-5 bg-white rounded">{event.name}</h4></div><br></br>
                            <div className="event-venue" style={{ color: 'grey' }}><i className="fas fa-map-marker-alt"></i>&nbsp;Venue:&nbsp;<span style={{ color: 'white' }}>{event.venue}</span></div><br></br>
                            <div className="event-time" style={{ color: 'grey' }}><span><i className="far fa-clock"></i>&nbsp;Time:</span>&nbsp;<span style={{ color: "white" }}>{event.time}</span></div><br></br>
                            <div className="event-details" dangerouslySetInnerHTML={{ __html: event.details_html }}></div><br></br>
                            <div className="event-email"><i className="far fa-paper-plane"></i>&nbsp;Email:&nbsp;<a className="e-email" href={`mailto:${event.email}`}>{event.email}</a></div>
                            <div className="registered" style={{ color: 'grey', fontWeight: '800', marginTop: "15px" }}><i class="fas fa-user-friends"></i>&nbsp; Total Registered : <span style={{ color: "white", fontSize: "40px" }}>{this.state.people_registered}</span></div>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.loading) {
            return (<Loader></Loader>);
        }
        else {
            return (
                <div className="events">
                    <Sidebar />
                    <div className="event-detail-page">
                        {event_detail}

                        {/* <div className="button-div" >
                            {this.state.register && this.props.auth.loggedin ? (<button onClick={this._event_unregister} className="btn unregister-btn">{this.state.btnloader ? <BtnLoader /> : "Unregister"}</button>) : (<button onClick={this._event_register} className="btn register-btn">{this.state.btnloader ? <BtnLoader /> : "Register"}</button>)}

                        </div> */}
                    </div>



                    <Footer />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(event_detail)