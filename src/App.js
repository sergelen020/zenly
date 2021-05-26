import React, {useState} from 'react';
import './App.scss';
import Home from './home.js'
import Changeprofile from './changeprofile'
import Addfriend from './addfriend'
import Auth from './authentication'
import Profile from './profile'
import {
  Switch,
  Route,
  useHistory
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
  const history = useHistory();
  return ( 
    <div>
      <Switch>
        <Route path="/login">
         <About />
        </Route>
        <Route path="/profile">
          <Seeprofile />
        </Route>
        <Route path="changeprofile">
          <About />
        </Route>
        <Route path="/addfriend">
          <Users />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Auth />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
