import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Element from '../pages/Element';
import Generic from '../pages/Generic';
import Home from '../pages/Home';
  

import '../css/header.css'

function Header() {
    return (
        <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/element">Element</Link>
            </li>
            <li>  
              <Link to="/generic">Generic</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/element">
            <Element/>
          
        </Route>

        <Route path="/generic">
            <Generic/>
          
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
    )
}

export default Header
