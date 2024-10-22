import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/About.css'; 

const About = () => {
    return (
        <div>
            <Container className="text-center my-5">
                <h1>About Us</h1>
                <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
                    alt="Basil Leaf"
                    className="my-4"
                />
               
            </Container>

            <Container>
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h3>We Are Your Favourite Store.</h3>
                            <p>
                                Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img
                            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg"
                            alt="Banner"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="bg-black text-white py-5">
                <Row className="text-center">
                    <Col>
                        <h2>Numbers Speak For Themselves!</h2>
                    </Col>
                    <Col>
                        <h3>Curated Products</h3>
                        <h1>5,000 +</h1>
                    </Col>
                    <Col>
                        <h3>Product Categories</h3>
                        <h1>800 +</h1>
                    </Col>
                    <Col>
                        <h3>Happy Customers</h3>
                        <h1>40 +</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row className="text-center">
                    <Col md={6}>
                        <img
                            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg"
                            alt="Offer"
                            className="img-fluid"
                        />
                        <p className="rating">★★★★★</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p>Mila Kunit</p>
                    </Col>
                    <Col md={6}>
                        <img
                            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png"
                            alt="Certified Products"
                            className="img-fluid"
                        />
                        <h3>Certified Products</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <h3>We Deal With Various Quality Organic Products!</h3>
                <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                    alt="Logo"
                    className="img-fluid mb-4"
                />
                <ul className="my-4">
                    <li>Fresh fruits</li>
                    <li>Dry fruits</li>
                    <li>Fresh vegetables</li>
                    <li>Dried vegetables</li>
                    <li>Beauty products</li>
                    <li>Milk products</li>
                    <li>Organic honey</li>
                    <li>Organic tea</li>
                </ul>
                <Button variant="success" className="mt-3">
                    Start Shopping
                </Button>
                    </Col>
                </Row>
            </Container>

           
            
        </div>
    );
};

export default About;
