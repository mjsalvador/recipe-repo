import React, { Component } from 'react';
import { connect } from 'react-redux';
// import child components
import RecipeCards from '../components/RecipeCards.jsx';
import RecipeCreator from '../components/RecipeCreator.jsx';
import * as actionCreator from '../actions/actions.js';
import store from '../store.js';

const mapStateToProps = state => ({
  ingredientList: state.recipes.ingredientList,
  ingredients: state.recipes.ingredients,
  totalRecipes: state.recipes.totalRecipes,
  recipe: state.recipes.recipe
});

const mapDispatchToProps = dispatch => ({

  handleClickAddIngredient : () => {
    dispatch(actionCreator.addIngredientLine());
  },

  handleChangeRecipe : (e) => {
    e.persist();
    dispatch(actionCreator.writeRecipe(e.target.value));
  },

  handleChangeQty : (e, id) => {
    e.persist();
    dispatch(actionCreator.writeQty(e.target.value, id));
  },

  handleChangeMsrmt : (e, id) => {
    e.persist();
    dispatch(actionCreator.writeMeasurement(e.target.value, id));
  },

  handleChangeIngr : (e, id) => {
    e.persist();
    dispatch(actionCreator.writeIngredient(e.target.value, id));
  },

  handleChangeInst : (e) => {
    e.persist();
    dispatch(actionCreator.writeInstructions(e.target.value));
  },

  handleClickAddRecipe : () => {
    dispatch(actionCreator.addRecipe());
  },

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerbox">
          <h1 id="header">bone apple teeth</h1>
          <RecipeCreator 
            handleClickAddIngredient={this.props.handleClickAddIngredient} 
            handleChangeRecipe={this.props.handleChangeRecipe}
            handleChangeQty={this.props.handleChangeQty}
            handleChangeMsrmt={this.props.handleChangeMsrmt}
            handleChangeIngr={this.props.handleChangeIngr}
            handleChangeInst={this.props.handleChangeInst}
            handleClickAddRecipe={this.props.handleClickAddRecipe}
            ingredients={this.props.ingredients}
            ingredientList={this.props.ingredientList}/>
          <RecipeCards 
            totalRecipes={this.props.totalRecipes}
            recipe={this.props.recipe}/>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);