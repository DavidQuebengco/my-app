import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='mt-5'>
      <Container className='bg-dark' fluid>
        <Row>
          <Col md-12>
            <p className='text-center text-white mt-3'>Copyright © Created by Group 9.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
