import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faCertificate, faTags, faUndo } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Features.css';

const featuresData = [
    {
        title: 'Free Shipping',
        subtitle: 'Above $5 Only',
        icon: faShippingFast,
    },
    {
        title: 'Certified Organic',
        subtitle: '100% Guarantee',
        icon: faCertificate, 
    },
    {
        title: 'Huge Savings',
        subtitle: 'At Lowest Price',
        icon: faTags, 
    },
    {
        title: 'Easy Returns',
        subtitle: 'No Questions Asked',
        icon: faUndo, 
    },
];

const Features = () => {
    return (
        <Container className="features-section">
            <Row>
                {featuresData.map((feature, index) => (
                    <Col md={3} key={index} className="feature-item">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={feature.icon} size="2x" />
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-subtitle">{feature.subtitle}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Features;
