import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader';

import faxios from '../../axios';

import './investors.css';
import InvestorCard from './InvestorCard';

const Investors = () => {
  const axios = faxios();
  const [state, setState] = useState({
    investors: [],
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/investors/');
      setState({
        investors: data.sort((a, b) => b.year - a.year),
        loading: false,
      });
    };
    fetchData();
  }, []);

  const { investors, loading } = state;
  if (loading) {
    return (<Loader />);
  }
  else {
    return (
      <div className="speakerContainer">
        <Sidebar />
        <div className="s">
          <h1 className="text-center text-white">Investors</h1>
          <div className="speakers">
            {investors.map((el) => (
              <InvestorCard key={el.id} investors={el} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Investors;
