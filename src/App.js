import { Component } from 'react';

import './App.css';

import Home from './Home'

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: 'Ray'
    };
  }

  render() {
    return (
        <Home user={this.state.user}/>
    );
  }

}

export default App;
