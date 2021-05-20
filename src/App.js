import React from 'react';
import './App.scss';
import Home from './home.js'
import Profile from './profile.js'
import Addfriend from './addfriend'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function About() {
  return <Profile />
}

function Users() {
  return <Addfriend />
}

function App() {
  <Home />
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <About />
          </Route>
          <Route path="/addfriend">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
