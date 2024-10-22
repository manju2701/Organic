import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BestSelling.css'; 

const products = [
    {
        category: 'Groceries',
        title: 'Assorted Coffee',
        price: '£35.00',
        imageUrl: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg',
    },
    {
        category: 'Groceries',
        title: 'Hand Sanitizer',
        price: '£15.00',
        imageUrl: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg',
    },
    {
        category: 'Groceries',
        title: 'Handpicked Red Chillies',
        price: '£19.00',
        imageUrl: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg',
    },
    {
        category: 'Groceries',
        title: 'Natural Extracted Edible Oil',
        price: '£25.00',
        imageUrl: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg',
    },
];

const BestSelling = () => {
    return (
        <Container className="best-selling-products">
            <h2 className="section-title">Best Selling Products</h2>
            <div className="symbol-container">
                <img 
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" 
                    className="Symbol" 
                    alt="Symbol" 
                />
            </div>
            <Row>
                {products.map((product, index) => (
                    <Col md={3} key={index} className="product-item">
                        <img src={product.imageUrl} alt={product.title} className="product-image" />
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-title">{product.title}</h3>
                        <span className="rating">★★★★★</span>     
                        <p className="product-price">{product.price}</p>
                        {product.originalPrice && (
                            <p className="product-original-price">Original price: <s>{product.originalPrice}</s></p>
                        )}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BestSelling;
