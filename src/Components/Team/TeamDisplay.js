import React from 'react';
import './team.css';
import Avatar from './Avatar.js';
import { Fade } from 'react-reveal';
import Label from './Label.js';
import descriptions from './descriptions.js';

let TeamNormalDisplay = ({ team = [] }) => {
  return <>
      {team.length ? (
        <div className="add_margin">
          <h2 className="text-center">
            {team[0].domain + ' '+ team[0].member_type+ (team.length-1?'s':'')}
          </h2>
          <div className="manager_container_ mt-3">
            {team.map((member) => (
              <div key={member.id} >
                <Label data={{...member, description: team[0].domain}} />
              </div>
            ))}
          </div>
        </div>) : ''}
    </>
  }
let TeamImageDisplay = ({ team = [] }) => {

    return <>
      {team.length ? (
        <div className="add_margin">
          <h2 className="text-center">
          {team[0].domain + ' '+ team[0].member_type+ (team.length-1?'s':'')}
          </h2>
          <div className="photo_container_">
            {team.map((member) => (
              <div key={member.id} className="av_box">
                <Fade bottom>
                  <Avatar data={{...member, description: team[0].domain}} />
                </Fade>
              </div>
            ))}
          </div>
        </div>) : ''}
    </>
  }
  
export {TeamImageDisplay, TeamNormalDisplay}