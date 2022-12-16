import React from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
function Contact() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='col-md-6'>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1><strong>Contact Us</strong></h1>
                </Card.Title>
                <Card.Text>
                  <p> <strong>Number</strong> : 09123456789</p>
                  <p><strong>Email</strong> : email@email.com</p>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md-6>
          <Card>
            <Card.Body>
              <Card.Title>
                996 san andres st. Malate, Manila
              </Card.Title>
              <Card.Text>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe class="gmap_iframe img-thumbnail" frameborder="0" scrolling="no" marginheight="" marginwidth="" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=996 san andres st.&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://embedmapgenerator.com"></a>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>

          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
