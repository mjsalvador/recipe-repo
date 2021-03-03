import React from 'react';
// import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions.js';

const IngredientsLine = props => {
  return(
    <div>
      <input id="text-box" placeholder="Amt"/>
      <input id="text-box" placeholder="Ingredient"/>
    </div>
  )
};

export default IngredientsLine;