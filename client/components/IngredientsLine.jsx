import React from 'react';
import * as actionCreator from '../actions/actions.js';

const IngredientsLine = props => {
  return(
    <div>
      <label>
        Qty
        <input id="text-box" placeholder="Amt" onChange={(e) => props.handleChangeQty(e, props.id)}/>
      </label>
      <label>
        Measurement
        <input id="text-box" placeholder="Unit" onChange={(e) => props.handleChangeMsrmt(e, props.id)}/>
      </label>
      <label>
        Ingredient
        <input id="text-box" placeholder="Ingredient" onChange={(e) => props.handleChangeIngr(e, props.id)}/>
      </label>
    </div>
  )
};

export default IngredientsLine;