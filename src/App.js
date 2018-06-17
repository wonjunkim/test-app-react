import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Unsupported from './component/Unsupported/Unsupported.js';
import { BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={Unsupported} />
          <Route path="/whale" exact strict component={Unsupported} />
          <Route path="/chrome" exact strict component={Unsupported} />
          <Route path="/firefox" exact strict component={Unsupported} />
          <Route path="/safari" exact strict component={Unsupported} />
        </div>
      </Router>
    );
  }
}

export default App;
