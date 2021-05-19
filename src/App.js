import React from 'react';
import './App.scss';
import Home from './home.js'
import Profile from './profile.js'
import Addfriend from './addfriend'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function HomeP() {
  return <Home />
}

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
        <nav>
          <ul>
            <li>
              <Link to="/">HomeP</Link>
            </li>
            <li>
              <Link to="/profile">About</Link>
            </li>
            <li>
              <Link to="/addfriend">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
