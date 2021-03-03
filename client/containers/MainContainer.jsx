import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import child components
import RecipeCards from '../components/RecipeCards.jsx';
import RecipeCreator from '../components/RecipeCreator.jsx';
// import store from '../store.js';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerbox">
          <h1 id="header">Online Recipe Webapp</h1>
          <RecipeCreator />
          <RecipeCards />
        </div>
      </div>
    )
  }
}

// react rendering
export default MainContainer;

// redux rendering
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);