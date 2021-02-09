import React, { useState, useEffect } from 'react';
import faxios from '../../axios';
import './mentors.css';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader';
import Avatar from './Avatar';

const Mentors = () => {
  const axios = faxios();
  const [state, setState] = useState({
    mentorsData: [],
    loading: true,
  });

  const x = [];

  useEffect(() => {
    for (let i = 2017; i <= 2019; i++) {
      axios.get(`/mentors/list/${i}/`).then((res) => {
        let data = res.data.data;
        if (data.length > 0) {
          x.push(...data);
        }
      });
    }
  }, []);

  const { mentorsData, loading } = state;
  const mentors = [];
  x ? x.map((el) => console.log(el)) : console.log('getting');
  return (
    <div className="mentors">
      <Sidebar />
      <h2 className="text-center text-danger">Hello</h2>
    </div>
  );
};

export default Mentors;
