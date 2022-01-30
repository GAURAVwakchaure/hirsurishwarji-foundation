import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import Navbar from "./Components/Navbar"
// import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { NavDropdown} from 'react-bootstrap';
import Home from './Components/Home';
import Application from './Components/Application';
import Form from './Form';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import View from './Components/View';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Navbar bg="primary" variant="dark">
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
          </Navbar><br /> */}
           <nav class="navbar navbar-expand-lg navbar-light bg-colour">
  <div class="container-fluid">
    <div class="navbar-brand"><h2 className='brandh'><span className='brands'>H</span>irsurishwarji<span className='brands'>  F</span>oundation</h2> </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <LinkContainer to="/">
                    <NavDropdown.Item ><h6 id = "hometab">Home</h6></NavDropdown.Item></LinkContainer>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/form">Apply</a> */}
          <LinkContainer to="/form">
                    <NavDropdown.Item ><h6 id = "applytab">Apply</h6></NavDropdown.Item></LinkContainer>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/application">Applicant Records</a> */}
          <LinkContainer to="/application">
                    <NavDropdown.Item ><h6 id = "applicanttabl">Applicant List</h6></NavDropdown.Item></LinkContainer>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Contact Us</a> */}
          <LinkContainer to="#">
                    <NavDropdown.Item ><h6 id = "contacttab">Contact Us</h6></NavDropdown.Item></LinkContainer>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

           <br />
          

          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/form' element={<Form />}></Route>
            <Route exact path='/application' element={<Application />}></Route>
            <Route exact path = '/:id' element = {<View/>}></Route>
          </Routes>          
        </header>
      </div>
    </Router>
  );
}
export default App;
