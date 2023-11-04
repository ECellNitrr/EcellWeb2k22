import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader';

import faxios from '../../axios';

import './speakers.css';
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  const axios = faxios();
  const [state, setState] = useState({
    speakers: [],
    loading: false,
  });

  function checkYear(data){
    return data.year=='2023';
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/speakers/full_list/');
      setState({
        // speakers: res?.data?.data?.sort((a, b) => b.year - a.year),
        speakers: res?.data?.data?.filter(checkYear),
        loading: false,
      });
    };
    fetchData();
  }, []);

  const { speakers, loading } = state;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="speakerContainer">
        <Sidebar />
        <div className="s">
          <h1 className="text-center text-white">Speakers</h1>
          <div className="speakers">
            {speakers.length > 0 &&
              speakers.map((el) => <SpeakerCard key={el.id} speakers={el} />)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Speakers;
