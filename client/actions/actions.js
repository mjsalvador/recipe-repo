import * as types from './actionTypes.js';


export const writeRecipe = (title) => ({
  type: types.WRITE_RECIPE,
  payload: title,
});

export const writeQty = (qty, id) => ({
  type: types.WRITE_QTY,
  payload: { qty : qty, id : id },
});

export const writeMeasurement = (msrmt, id) => ({
  type: types.WRITE_MEASUREMENT,
  payload: { msrmt : msrmt, id : id }
});

export const writeIngredient = (ingr, id) => ({
  type: types.WRITE_INGREDIENT,
  payload: { ingr : ingr, id : id }
});

export const addIngredientLine = () => ({
  type: types.ADD_INGREDIENT_LINE
});

export const writeInstructions = (instructions) => ({
  type: types.WRITE_INSTRUCTIONS,
  payload: instructions,
});

export const addRecipe = () => ({
  type: types.ADD_RECIPE,
})

