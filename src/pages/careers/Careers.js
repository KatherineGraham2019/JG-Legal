import React from 'react';
import { Form, Col } from 'react-bootstrap';
import './careers.scss';

class Careers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            careerForm: {
                firstNameInput: "",
                lastNameInput: ""
            }
        };
    }

    render() {
        return(
            <div className="careers">
                <div className="spacer"></div>
                <div className="careers-description">
                    <h2>Careers</h2>
                    <hr />
                    <article>
                        If you are looking for a firm committed to integrity, justice and providing 
                        valuable services to our clients, a firm not just interested in the bottom line, then look no further. 
                        All of our employees must make a pledge [link] Read the pledge [link]. If you are able to make this 
                        pledge, then we want you to work for us, and are continually hiring. We offer strong compensation, 
                        flexibility, and a commitment to the spiritual, mental and physical health of our workers.  
                    </article>
                </div>
                <div className="careers-form">
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="careerForm.firstNameInput">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="careerForm.lastNameInput">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="careerForm.lastNameInput">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        );
    }

}

export default Careers;