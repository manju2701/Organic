import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; 

const Contact = () => {
    return (
        <Container>
         
            <div className="text-center my-5">
                <h1>Get In Touch</h1>
                <Image
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
                    fluid
                    className="my-4"
                />
            </div>
            
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={faPhone} className="icon" /> Phone
                            </Card.Title>
                            <Card.Text>
                                +123 456 7890 <br />
                                +123 456 7890
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                            </Card.Title>
                            <Card.Text>
                                info@example.com <br />
                                support@example.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Address
                            </Card.Title>
                            <Card.Text>
                                1569 Ave, New York,<br />
                                NY 10028, USA
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="text-center my-5">
                <h1>Frequently Asked Questions!</h1>
                <Image
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                    fluid
                    className="my-4"
                />
            </div>

            <div className="mb-4">
                {[
                    "Pulvinar nostrud class cum facilis?",
                    "Pon excepturi numquam, facilis?",
                    "Consequat nesciunt fusce facilisi?"
                ].map((question, index) => (
                    <div key={index} className="faq-item">
                        <h5>{question}</h5>
                        <p>
                            I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Contact;
