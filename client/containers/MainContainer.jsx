import React, { Component } from 'react';
import { connect } from 'react-redux';
// import child components
import RecipeCards from '../components/RecipeCards.jsx';
import RecipeCreator from '../components/RecipeCreator.jsx';
import * as actionCreator from '../actions/actions.js';
import store from '../store.js';

const mapStateToProps = state => ({
  ingredientList: state.recipes.ingredientList,
});

const mapDispatchToProps = dispatch => ({

  handleClick : () => {
    dispatch(actionCreator.addIngredientLine());
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
          <RecipeCreator handleClick={this.props.handleClick} ingredientList={this.props.ingredientList}/>
          <RecipeCards />
        </div>
      </div>
    )
  }
}

// react rendering
// export default MainContainer;

// redux rendering
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);