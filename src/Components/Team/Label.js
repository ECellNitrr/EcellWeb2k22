import React from 'react';

const Label = ({ data }) => {
  const { name, year } = data;
  return (
    <div className="manager_item" id={name} key={name+year}>
      <h5 className="pt-1">{name}</h5>
    </div>
  );
};

export default Label;
