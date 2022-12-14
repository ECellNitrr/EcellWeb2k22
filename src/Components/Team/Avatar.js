import React from 'react';

const Avatar = ({ data }) => {
  const {
    domain,
    facebook,
    image,
    linkedin,
    name,
    profile_url,
  } = data;
  return (
    <div className="mt-3">
      <div className="avatar_container">
        <div className="image_container">
          <img src={image} className="img-fluid" />
          <div className="details">
            <h5 dangerouslySetInnerHTML={{ __html:name }}></h5>
            {domain?<p>{domain}</p>:'' }
          </div>
          <div className="social_icons">
            {profile_url && (
              <a target="_blank" rel="noopener noreferrer" href={profile_url}>
                <i className="fa fa-link"></i>
              </a>
            )}
            {facebook && (
              <a target="_blank" rel="noopener noreferrer" href={facebook}>
                <i className="fab fa-facebook"></i>
              </a>
            )}
            {linkedin && (
              <a target="_blank" rel="noopener noreferrer" href={linkedin}>
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
