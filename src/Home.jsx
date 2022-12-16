import React from 'react';
import TimeAndDate from './timeanddate';
import UserInfo from './userinfo';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NewsFeed from './post';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <Container className='mt-5' >
        <Row>
          <Col className='col-md-4'>
            <div>
              <UserInfo />
            </div>
            <div>
              <TimeAndDate/>
            </div>
          </Col>
          <Col className='col-md-8'>
              <div>
                <NewsFeed />
              </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Home;
