import React, { useState, useEffect } from 'react';
import faxios from '../../axios';
import Loader from '../api_loader/api_loader';
import { Link } from 'react-router-dom';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';

import './team.css';
import Avatar from './Avatar';

const TeamList = () => {
  const axios = faxios();

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { years },
      } = await axios.get(`/team/team_years/`);
      const res = [];
      years.map((el) => {
        res.push(el[0]);
      });
      setState({
        data: res.sort().reverse(),
        loading: false,
      });
    };
    fetchData();
  }, []);
  const { data: year } = state;

  return (
    <div className="teamcontainer">
      <Sidebar />
      <div className="teamPage">
        <h1 className="text-center heading">Team E-Cell</h1>

        {year.map((el) => (
          <div className="yearContainer">
            <Link to={`/team/${el}`}>
              <h3>
                Team of {el}-{el - 2000 + 1}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TeamList;
