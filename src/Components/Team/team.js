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

  const addTeamData = () => {
    state.data.map(member => {

      let teamCode = descriptions[member.member_type][0]+'_';
      if(member.member_type!='HCO')teamCode+=member.domain

      member.domain=descriptions[member.domain]
      member.member_type=descriptions[member.member_type][1]

      if (!teamData[teamCode]) teamData[teamCode] = [];
      
      teamData[teamCode].push(member);
    });
  };

 

  addTeamData();

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
            {Object.keys(teamData).sort().reverse().map(teamName => {
              let team = teamData[teamName];
              console.log(team[0].member_type)
              if ((team[0].member_type).toLowerCase().includes("coordinator") || (team[0].member_type).toLowerCase().includes("co-ordinator"))  
              { 
              return <TeamImageDisplay team={team} key={teamName}/>}
              else {return <TeamNormalDisplay team={team} key={teamName}/>}
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Team;
