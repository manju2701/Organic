// OfferBanner.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/OfferBanner.css'; 

const OfferBanner = () => {
  return (
    <Container className="offer-banner">
      <Row className="align-items-center">
        <Col className="text-center">
          <div className="offer-content">
            <h2 className="offer-title">Get 25% Off On Your First Purchase!</h2>
            <Button variant="success" className="shop-button">Shop Now</Button>
            <p className="offer-subtitle">Try It For Free. No Registration Needed.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferBanner;
