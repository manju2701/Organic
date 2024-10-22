// OrganicShop.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Organicshop.css';

const OrganicShop = () => {
    return (
        <Container className="my-5">
            <div className="image-container">
                <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" 
                    className="image"
                    alt="Organic Shop"
                />
            </div>
            <Row>
               
                <Col md={4}>
                    <Card className="custom-card">
                        <Card.Img
                            variant="top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtKCu_wStLSU3V3tNjd7DyTjZ2-fRfksFow&s"
                            alt="Farm Fresh Fruits"
                            className="custom-img"
                        />
                        <Card.Body>
                            <Card.Title>Farm Fresh Fruits</Card.Title>
                            <Card.Text>
                                Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.
                            </Card.Text>
                            <Button className="shop-button" href="https://websitedemos.net/organic-shop-02/?customize=template#">
                                Shop Now 
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="custom-card">
                        <Card.Img
                            variant="top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiagc9t31nozXQdzfXgDgb96Wh0tfyqQA-CQ&s"
                            alt="Fresh Vegetables"
                            className="custom-img"
                        />
                        <Card.Body>
                            <Card.Title>Fresh Vegetables</Card.Title>
                            <Card.Text>
                                Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.
                            </Card.Text>
                            <Button className="shop-button" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqHHW7tO4FFq_6En0NYRhz79xz0V-NL5Wbg&s">
                            Shop Now
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="custom-card">
                        <Card.Img
                            variant="top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqHHW7tO4FFq_6En0NYRhz79xz0V-NL5Wbg&s"
                            alt="Organic Legume"
                            className="custom-img"
                        />
                        <Card.Body>
                            <Card.Title>Organic Legume</Card.Title>
                            <Card.Text>
                                Phasellus sed urna mattis, viverra libero sed, aliquam est.
                            </Card.Text>
                            <Button className="shop-button" href="https://websitedemos.net/organic-shop-02/?customize=template#">
                                Shop Now 
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OrganicShop;
