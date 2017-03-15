import React, { Component } from 'react';

import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="page-title">
            <h1>Jungmin Cha</h1>
          </div>
        </div>
        <div className="Header">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
