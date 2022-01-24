import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Home from './Components/Home';
import Application from './Components/Application';
import Form from './Form';
import { LinkContainer } from 'react-router-bootstrap';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>Hirsurishwarji Foundation </Navbar.Brand>
              <Nav className="ml-auto">
                <NavDropdown title={<b>⋮</b>} id="navbarScrollingDropdown">
                  <LinkContainer to="/">
                    <NavDropdown.Item >Home</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/form">
                    <NavDropdown.Item >Apply</NavDropdown.Item></LinkContainer>
                  <LinkContainer to="/application">
                    <NavDropdown.Item >Applicant List</NavDropdown.Item></LinkContainer>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar><br />

          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/form' element={<Form />}></Route>
            <Route exact path='/application' element={<Application />}></Route>
          </Routes>          
        </header>
      </div>
    </Router>
  );
}
export default App;
