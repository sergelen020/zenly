import React from 'react';
import './App.scss';
import Home from './home.js'
import Changeprofile from './changeprofile'
import Addfriend from './addfriend'
import Auth from './authentication'
import Profile from './profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function Authen() {
  return <Authen />
}
function About() {
  return <Changeprofile />
}
function Seeprofile() {
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
          <Route path="/changeprofile">
            <About />
          </Route>
          <Route path="/profile">
            <Seeprofile />
          </Route>
          <Route path="/addfriend">
            <Users />
          </Route>
          <Route path="/authen">
            <Auth />
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
