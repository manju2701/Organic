import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="text-center">
            <img 
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" 
              alt="Logo" 
              className="footer-logo"
            />
            <p>
              Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Contact</li>
              <li>Home</li>
              <li>My account</li>
              <li>Shop</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Site Links</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offers Coupons</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Download Our Mobile App</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.
            </p>
            <div className="app-icons">
            <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
            <p>
              Know More About Us
              Visit Store
              Let’s Connect
              Locate Stores

            </p>
            </ul>
              <a href="#">
                <img 
                  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" 
                  alt="Google Play" 
                  className="app-icon"
                />
              </a>
              <a href="#">
                <img 
                  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" 
                  alt="App Store" 
                  className="app-icon"
                />
              </a>
              </Col>
            </div>
            </Col>
        
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Copyright © 2024 | Organic Store

</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
