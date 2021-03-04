import React from 'react';
import * as types from '../actions/actionTypes';

const initialState = {
  recipe: '',
  ingredients: [{line: 1}],  // fill this array with the ingredients of each line in array [[1000, grams, water], [700, grams, flour], [60 , grams, olive oil]]
  instructions: '',
  ingredientList : 1,
  recipeList: [],
  totalRecipes: 0,
};

const recipesReducer = (state = initialState, action) => {
  
  let ingredients;
  let recipeList;
  
  switch (action.type) {
    
    case types.WRITE_RECIPE: {
      return {
        ...state,
        recipe: action.payload
      }
    }

    case types.WRITE_QTY: {
      ingredients = state.ingredients.slice();
      ingredients[action.payload.id - 1].qty = action.payload.qty;
      return {
        ...state,
        ingredients
      }
    }

    case types.WRITE_MEASUREMENT: {
      ingredients = state.ingredients.slice();
      ingredients[action.payload.id - 1].msrmt = action.payload.msrmt;
      return {
        ...state,
        ingredients
      }
    }

    case types.WRITE_INGREDIENT: {
      ingredients = state.ingredients.slice();
      ingredients[action.payload.id - 1].ingr = action.payload.ingr;
      return {
        ...state,
        ingredients
      }
    }

    case types.ADD_INGREDIENT_LINE: {
      const ingredientList = state.ingredientList + 1;
      const ingredientLine = {
        line : ingredientList,
      };
      ingredients = state.ingredients.slice();
      ingredients.push(ingredientLine);
      return {
        ...state,
        ingredients,
        ingredientList
      }
    }
    
    case types.WRITE_INSTRUCTIONS: {
      return {
        ...state, 
        instructions: action.payload
      }
    }

    case types.ADD_RECIPE: {
      const totalRecipes = state.totalRecipes + 1;
      const newRecipe = {
        recipeId : totalRecipes,
        recipe : state.recipe,
      };
      recipeList = state.recipeList.slice();
      recipeList.push(newRecipe);
      return {
        ...state,
        recipeList,
        totalRecipes
      }
    }

    default: {
      return state;
    }
  }
};

export default recipesReducer;