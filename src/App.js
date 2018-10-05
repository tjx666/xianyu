import React, { Component } from 'react';
import Content from './container/content/Content';
import Navbar from './container/navbar/Navbar';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Content/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
