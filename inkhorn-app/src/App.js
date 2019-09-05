import React from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
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

        <header className="sticky-header">    
            <Navbar className="navbar-color" expand="lg">
                <Navbar.Brand href="/">Inkhorn Legal Group</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="inkhorn-navbar" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="practices">Practices</Nav.Link>
                        <Nav.Link href="people">People</Nav.Link>
                        <Nav.Link href="careers">Careers</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/San-Diego-Images/Hall-Of-Justice-5.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Integrity</h3>
                        <p>Law Office of Jeremiah Graham</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/San-Diego-Images/New-Courthouse-3.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Results</h3>
                        <p>Law Office of Jeremiah Graham</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/San-Diego-Images/Skyline-3.jpg" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Fairness</h3>
                        <p>Law Office of Jeremiah Graham</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="card-container">

        </div>
    </div>
  );
}

export default App;
