import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
