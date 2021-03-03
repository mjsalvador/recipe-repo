import React from 'react';
import IngredientsLine from './IngredientsLine.jsx';

const RecipeCreator = props => {

  const ingredients = [];
  for (let i = 0; i < props.ingredientList; i++) {
    ingredients.push(<IngredientsLine key={`Ingredient List ${i}`}/>);
  }

  return(
    <div className="recipeCreatorContainer" style={styles.container}>
      <h2>Create a Recipe</h2>
      <div>
        <h4>Title</h4>
        <input id="text-box" placeholder="Recipe"/>
      </div>
      <div>
        <h4>Ingredients</h4>
        { ingredients }
      </div>
      <button id="submit-btn" style={styles.btn} onClick={props.handleClick}>Add Ingredient</button>
      <div>
        <h4>Instructions</h4>
        <textarea id="instructions-box" style={styles.instructions}/>
      </div>
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
    width: '100px',
    marginTop: '10px'
  },

  instructions: {
    width: '400px',
    height: '400px',
    whiteSpace: 'pre'
  },

}

export default RecipeCreator;

// add onChange and onClick event handlers to update state with inputted text
