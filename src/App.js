import { Component } from 'react';
import { Router } from '@reach/router';

import './App.css';

import Home from './Home'
import Navigation from './Navigation';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';

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
        
        <Router>
          <Home path="/" user={this.state.user}/>
          <Login path="/login"/>
          <Register path="/register"/>
          <Meetings path="/meetings"/>
        </Router>
      </div>
    );
  }

}

export default App;
