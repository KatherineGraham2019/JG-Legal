import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Careers from './pages/careers/Careers.js';
import Contact from './pages/contact/Contact.js';
import Practices from './pages/practices/Practices.js';
import './App.scss';

function App() {
  return (
    <div className="inkhorn-app">
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin />
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin />
        <script>var Alert = ReactBootstrap.Alert;</script>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <header className="sticky-header">    
            <Navbar className="navbar-color" expand="lg">
                <Navbar.Brand href="/">Inkhorn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="inkhorn-navbar" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="practices">Practices</Nav.Link>
                        {/*Coming Soon: <Nav.Link href="people">People</Nav.Link>*/}
                        <Nav.Link href="careers">Careers</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="sub-header">
                <h3>{/*Law Office of Jeremiah Graham*/}</h3>
            </div>
        </header>

        <Router>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/careers" component={Careers} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/practices" component={Practices} />
            </div>
        </Router>
        
        <footer className="inkhorn-footer">
            <div className="copyright">&copy; <b>Inkhorn Legal Group</b> All Rights Reserved </div>
            <div className="social-media">
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-linkedin"></a>
            </div>
        </footer>

    </div>
  );
}

export default App;
