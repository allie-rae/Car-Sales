import React from 'react';

const AddedFeature = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
