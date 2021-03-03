import React from 'react';
import IngredientsLine from './IngredientsLine.jsx';

const RecipeCreator = props => {
  return(
    <div className="recipeCreatorContainer" style={styles.container}>
      <h2>Create a Recipe</h2>
      <label>
        Recipe
        <input id="text-box" placeholder="Recipe"/>
      </label>
      <IngredientsLine />
      <button id="submit-btn" style={styles.btn}>Add Ingredient</button>
      <input id="instructions-box" style={styles.instructions}/>
      <button id="submit-btn" style={styles.btn}>Add Recipe</button>
    </div>
  )
};

const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  btn: {
    fontSize: '14px',
    width: '100px'
  },

  instructions: {
    width: '400px',
    height: '400px'
  },

}

export default RecipeCreator

// add onChange and onClick event handlers to update state with inputted text
// add onClick event handler to add more 'amt' and 'ingredient' text boxes
