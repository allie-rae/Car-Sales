import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.removeItem(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeItem })(AddedFeature);
