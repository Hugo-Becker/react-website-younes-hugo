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
      <header>
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
        



        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/element">Element</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
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
