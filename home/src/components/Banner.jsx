import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css'; 

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/world-health-day-celebration-with-healthy-food_23-2151244703.jpg?size=626&ext=jpg&ga=GA1.1.959480181.1728637295&semt=ais_hybrid-rr-similar"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Organic vegetables</h3>  
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/fresh-fruit-vegetable-frame-dark-background_776894-95078.jpg?size=626&ext=jpg&ga=GA1.1.959480181.1728637295&semt=ais_hybrid-rr-similar"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Organic Fruits</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/organic-food-horizontal-banner-template-design_8499-8009.jpg?size=626&ext=jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Vegetables and Fruits</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
