import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles/Categories.css';

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [lastAddedProductId, setLastAddedProductId] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products/all');
            setProducts(response.data.products);
        };
        fetchProducts();
    }, []);

   
    const addToCart = async (productId) => {
        const existingProducts = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('Existing Products:', existingProducts);
        
        const existingProduct = existingProducts.find(item => item.productId === productId);
    
        if (existingProduct) {
            existingProduct.quantity += 1;  
        } else {
            existingProducts.push({ productId, quantity: 1 });
        }
    
        localStorage.setItem('cart', JSON.stringify(existingProducts));
        console.log('Updated Cart:', existingProducts);
    
        try {
            const response = await axios.post('http://localhost:5000/api/cart/addtocart', {
                productId,
                quantity: existingProduct ? existingProduct.quantity : 1
            });
            console.log('Add to Cart Response:', response.data);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    
        setLastAddedProductId(productId);
        setTimeout(() => setLastAddedProductId(null), 3000);
    };
    
    
    return (
        <Container>
            <h2 className="text-center my-4">Products</h2>
            <Row>
                {products.map(product => (
                    <Col key={product._id} md={3} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image || 'placeholder.jpg'} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button 
                                    variant="success" 
                                    onClick={() => addToCart(product._id)}
                                    className="w-100"
                                >
                                    Add to Cart
                                </Button>
                                {lastAddedProductId === product._id && (
                                    <p className="success-message mt-2">Product added to cart!</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center my-4">
                <Link to="/cart">
                    <Button variant="success">Go To Cart</Button> 
                </Link>
            </div>
        </Container>
    );
};

export default Categories;
