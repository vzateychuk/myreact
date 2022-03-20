import { Component } from 'react';

import './App.css';

import Home from './Home'
import Navigation from './Navigation';
import Welcome from './Welcome';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: 'Vladimir'
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user}/>
        { this.state.user && <Welcome user={this.state.user}/> }
        <Home user={this.state.user}/>
      </div>
    );
  }

}

export default App;
