import React from 'react';
// import { connect } from 'react-redux';
import * as actionCreator from '../actions/actions.js';

const IngredientsLine = props => {
  return(
    <div>
      <label>
        Qty
        <input id="text-box" placeholder="Amt"/>
      </label>
      <label>
        Measurement
        <input id="text-box" placeholder="Unit"/>
      </label>
      <label>
        Ingredient
        <input id="text-box" placeholder="Ingredient"/>
      </label>
    </div>
  )
};

export default IngredientsLine;