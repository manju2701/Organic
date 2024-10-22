import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios'
import '../styles/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const response = await axios.post('http://localhost:5000/user/register', {
            username,
            email,
            password,
        });
        alert('Registration successful!');
        console.log(response.data);
        // Optionally, redirect or clear form after successful registration
    } catch (err) {
        console.error(err);
       
    }
};


  return (
    <Container className="signin-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="signin-form">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Sign UP
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
