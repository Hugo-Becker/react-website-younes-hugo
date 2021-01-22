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
import 'bootstrap/dist/css/bootstrap.min.css'
  

import '../css/header.css'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    return (
        <Router>
      
        {/* <nav>
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
        </nav> */}
        



        <Navbar bg="dark" className="navbar" expand="lg">
  <Navbar.Brand href="#home"><Link className="brand"to="/">BRAND</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#"><Link className="link"to="/">Home</Link></Nav.Link>
      <Nav.Link href="#"><Link className="link" to="/element">Element</Link></Nav.Link>
      <Nav.Link href="#"><Link className="link" to="/generic">Generic</Link></Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      
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
