import React from 'react';

const Avatar = ({ data }) => {
  const {
    domain,
    facebook,
    id,
    image,
    linkedin,
    member_type,
    name,
    profile_url,
    year,
  } = data;

  return (
    <div className="mt-3">
      <div className="avatar_container">
        <div className="image_container">
          <img src={image} className="img-fluid" />
          <div className="details">
            <h5>{name}</h5>
            {domain ? (
              domain === 'pr' ? (
                <p>Public Relation and Marketing</p>
              ) : domain === 'tech' ? (
                <p>Technical Team</p>
              ) : domain === 'doc' ? (
                <p>Documentation Team</p>
              ) : domain === 'design' ? (
                <p>Design Team</p>
              ) : (
                domain === 'spons' && <p>Sponsorship Team</p>
              )
            ) : (
              ''
            )}
          </div>
          <div className="social_icons">
            {profile_url && (
              <a target="_blank" href={profile_url}>
                <i className="fa fa-link"></i>
              </a>
            )}
            {facebook && (
              <a target="_blank" href={facebook}>
                <i className="fab fa-facebook"></i>
              </a>
            )}
            {linkedin && (
              <a target="_blank" href={linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
