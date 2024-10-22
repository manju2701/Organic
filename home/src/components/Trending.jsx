// TrendingProducts.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Trending.css'; 

const Trending = () => {
    const products = [
        {
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg',
              category: 'Groceries',
            title: 'Assorted Coffee',
            price: '£35.00',
        },
        {
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-400x400.jpg',
            category: 'Groceries',
            title: 'Fresh Orange Juice',
            price: '£18.00',
        },
        {
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg',
            category: 'Groceries',
            title: 'Hand Sanitizer',
            price: '£15.00',
        },
        {
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg',
            category: 'Groceries',
            title: 'Handpicked Red Chillies',
            price: '£19.00',
        },
    ];

    return (
        <Container className="my-5">
            <h2 className="text-center">Trending Products</h2>
            <div className="logo-container">
                <img
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                    alt="Logo"
                    className="logo"
                />
            </div>
            <Row className="mt-4">
                {products.map((product, index) => (
                    <Col md={3} key={index}>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src={product.img}
                                alt={product.title}
                                className="custom-img"
                            />
                            <Card.Body> 
                            <p className="product-category">{product.category}</p>
                                <Card.Title>{product.title}</Card.Title>
                                <span className="rating">★★★★★</span>
                                <Card.Text>{product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Trending;
