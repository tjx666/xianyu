import React, { Component } from 'react';
import style from './App.scss';
import Content from './container/content/Content';
import Navbar from './container/navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className={ style.container }>
        <Content/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
