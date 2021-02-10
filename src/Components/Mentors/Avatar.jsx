import React from 'react';

const Avatar = ({ data }) => {
  const { description, detail, id, name, profile_pic_url } = data;

  return (
    <div className="mt-3">
      <div className="avatar_container">
        <div className="image_container">
          <img src={profile_pic_url} className="img-fluid" />
          <div className="details">
            <h5>{name}</h5>
            <h6>{detail}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
