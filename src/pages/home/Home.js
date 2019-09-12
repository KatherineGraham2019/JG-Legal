import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import './home.scss';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="home-main-page">
                <div className="carousel-container">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="/San-Diego-Images/Hall-Of-Justice-5.jpg" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Integrity</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="/San-Diego-Images/New-Courthouse-3.jpg" alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Justice</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="/San-Diego-Images/Skyline-3.jpg" alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Results</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="card-container">
                    <Container>
                        <Row>
                            <Col xs={5} md={3}>
                                <Image src="/San-Diego-Images/Coronado-Bridge-2.jpg" thumbnail />
                                <h3>Contact</h3>
                            </Col>
                            <Col xs={5} md={3}>
                                <Image src="/San-Diego-Images/New-Courthouse-7.jpg" thumbnail />
                                <h3>Promotional Offers</h3>
                            </Col>
                            <Col xs={5} md={3}>
                                <Image src="/San-Diego-Images/Law-Corner.jpg" thumbnail />
                                <h3>Freedom of Conscience</h3>
                            </Col>
                            <Col xs={5} md={3}>
                                <Image src="/San-Diego-Images/San-Diego-Glamour-1.jpg" thumbnail />
                                <h3>Vacate Default Judgements</h3>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;