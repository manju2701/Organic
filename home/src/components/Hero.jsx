import React from 'react';
import '../styles/Hero.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero= () => {
    return (
        <div className="responsive-row">
            <div className="column image-column">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="Description" className="responsive-image" />
            </div>
            <div className="column text-column" style={{display:"flex",flexDirection:"column" ,rowGap:"15px" ,justifyContent:"center",alignItems:"center"
            }}>  <img 
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" 
            className="Symbol" 
            alt="Symbol" 
        />
                <h3>Best Quality Products</h3>
                <h2>Join The Organic Movement!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.pulvinar dapibus leo..</p>
                <Button variant="success" size="lg" className="banner-button">
                                Shop Now
                            </Button>

            </div>
        </div>
    );
};

export default Hero;