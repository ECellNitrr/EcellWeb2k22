import React, { Component } from 'react';
import faxios from '../../axios';
import './mentors.css';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader';
import Avatar from './Avatar';

class mentors extends Component {
  axios = faxios();
  state = {
    mentors: {},
    loading: true,
  };

  componentDidMount() {

    let currentYear = 2022

    for (let i = 2016; i <= currentYear; i++) {
      this.axios.get(`/mentors/list/${i}/`).then((res) => {
        console.log(res);
        let data = res.data.data;
        if (data.length > 0) {
          this.setState({
            loading: false,
            mentors: {
              ...this.state.mentors,
              [i]: data,
            },
          });
        }
      }).catch((err)=>{
        this.setState({
          loading:false
        });
        console.log(err);
      });
    }
  }

  render() {
    console.log(this.state.mentors);
    let mentors_html = [];

    for (const year in this.state.mentors) {
      let mentors = this.state.mentors[year];
      mentors = mentors.map((mentor) => (
        <div className="av_box" key={mentor.id}>
          <Avatar data={mentor} />
        </div>
      ));

      const yearwise_html = (
        <div className="photo_container_" key={year}>
          {mentors}
        </div>
      );
      mentors_html.push(yearwise_html);
    }

    return (
      <div className="mentors">
        <Sidebar />
        <h1 className="text-center heading">Mentors</h1>
        <div style={{paddingBottom: "100px"}}>
          {this.state.loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            mentors_html
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default mentors;
