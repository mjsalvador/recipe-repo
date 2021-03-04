import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const RecipeCards = props => {

  const recipes = [];
  for (let i = 0; i < props.totalRecipes; i++) {
    recipes.push(<RecipeCard 
      recipe={props.recipe}
      key={i}/>
    )
  }

  return(
    <div>
      <h2>All Recipes</h2>
      { recipes }
    </div>
  )
};

export default RecipeCards;