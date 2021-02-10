import React from 'react';
import { baseURL } from '../../axios';

const SpeakerCard = ({ speakers }) => {
  const {
    company,
    description,
    email,
    name,
    profile_pic,
    social_media,
    year,
  } = speakers;
  return (
    <div class="cardContainer">
      <div className="follow">
        <a href={social_media} target="_blank">
          <i class="fas fa-plus-circle"></i>
        </a>
        <p>Follow</p>
      </div>
      <div className="imageBox">
        <img src={baseURL + profile_pic} alt={name} />
      </div>
      <div className="contentBox">
        <h2 className="text-center">{name}</h2>
        <h5 className="text-center mt-2">{company}</h5>
        <h4 className="text-center mt-3">SPEAKER {year}</h4>
        <div className="desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
