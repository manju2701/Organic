import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Brands.css'; 
function Brands() {
  const brands = [
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg",
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg"
  ];

  return (
    <Container className="featured-brands">
      <h2 className="text-center">Featured Brands</h2>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col xs={6} md={4} lg={2} key={index} className="brand-logo">
            <img src={brand} alt={`Brand ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Brands;
