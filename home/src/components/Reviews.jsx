import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Reviews.css'; 

const Reviews = () => {
    return (
        <Container className="reviews-container">
            <h2 className="text-center">Customers Reviews</h2>
            <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                alt="Logo"
                className="logo"
            />
            
            <Row className="justify-content-center mt-4">
                <Col md={4} className="mb-4">
                    <Card className="review-card">
                        <Card.Body className="d-flex justify-content-between">
                            <div className="flex-grow-1">
                                <Card.Title>
                                    <span className="rating">★★★★★</span>
                                </Card.Title>
                                <Card.Text>
                                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Card.Text>
                                <Card.Img
                                variant="bottom"
                                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png"
                                className="client-image"
                            />
                                <Card.Footer className="text-center">Mila Kunis</Card.Footer>
                            </div>
                          
                        </Card.Body>
                    </Card>
                </Col>

         
                <Col md={4} className="mb-4">
                    <Card className="review-card larger-card">
                        <Card.Body>
                            <h3 className="text-center">Deal Of The Day: 15% Off On All Vegetables!</h3>
                            <p className="text-center">I am text block. Click edit button to change this text.</p>
                            <Button variant="success" className="shop-now-button" >Shop Now</Button>
                        </Card.Body>
                     
                    </Card>
                </Col>

       
                <Col md={4} className="mb-4">
                    <Card className="review-card">
                        <Card.Body className="d-flex justify-content-between">
                            <div className="flex-grow-1">
                                <Card.Title>
                                    <span className="rating">★★★★★</span>
                                </Card.Title>
                                <Card.Text>
                                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Card.Text>
                                <Card.Img
                                variant="bottom"
                                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png"
                                className="client-image"
                            />
                                <Card.Footer className="text-center">Mike Sendler</Card.Footer>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
