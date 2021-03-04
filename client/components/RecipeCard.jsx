import React from 'react';

const RecipeCard = props => {
  return (
    <div className="recipeCard" styles={styles.container}>
      <p id="desc">Recipe: {props.recipe}</p>
    </div>
  )
}

const styles = {
  
  container: {
    border: '1px solid black',
    height: '100px',
    width: '100px',
  },

}

export default RecipeCard;