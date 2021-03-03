import React from 'react';
import * as types from '../actions/actionTypes';

const initialState = {
  ingredientList : 1,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT_LINE: {
      const ingredientList = state.ingredientList + 1;
      return {
        ...state,
        ingredientList
      }
    }

    default: {
      return state;
    }
  }
};

export default recipesReducer;