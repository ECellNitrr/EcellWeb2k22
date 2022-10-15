import React, { useState, useEffect } from 'react';
import faxios from '../../axios';
import Loader from '../api_loader/api_loader';
import { Link } from 'react-router-dom';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';

import './team.css';
import {TeamImageDisplay, TeamNormalDisplay} from './TeamDisplay.js';
import descriptions from './descriptions.js';



const Team = ({ match }) => {
  const year = match.params.year;
  const axios = faxios();

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const teamData = {};

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data },
      } = await axios.get(`/team/list/${year}/`);
      console.log(data);
      setState({ data, loading: false });
    };
    fetchData();
  }, []);

  const addPeople = () => {
    state.data.map(el => {

      let teamCode = descriptions[el.member_type][0]+'_';
      if(el.member_type!='HCO')teamCode+=el.domain

      el.domain=descriptions[el.domain]
      el.member_type=descriptions[el.member_type][1]

      if (!teamData[teamCode]) teamData[teamCode] = [];
      teamData[teamCode].push(el);
    });
  };

 

  addPeople();

  if (state.loading) {
    return <Loader />;
  } else {
    return (
      <div className="teamcontainer">
        <Sidebar />
        <div className="teamPage">
          <h1 className="text-center heading">
            Team of {year}-{year - 2000 + 1}
          </h1>
          <Link className="teamLink" to="/team/yearwise">
            <i className="fa fa-arrow-left mr-1"></i>Previous Year Teams
          </Link>


          <div className="people">
            {Object.keys(teamData).sort().map(teamName => {
              let team = teamData[teamName];
              if (!team[0]) return '';

              
              if (team[0].image) 
              return <TeamImageDisplay team={team} key={teamName}/>
              else return <TeamNormalDisplay team={team} key={teamName}/>
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Team;
