import React, { Component } from 'react';
import { render } from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    )
  }
}

export default App;