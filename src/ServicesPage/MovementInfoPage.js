import React from 'react';
import pilates from '../images/pilates.jpg';
import './ServicesPages.css';
import { Container, Row, Col, } from 'react-bootstrap';

function  MovementInfoPage() {
  return (
    <div className="MovementInfoPage">
      <div className="fluid-container">
        <Container>
          <Row>
            <Col>
              <div>
              <img className="pilates-img" src={pilates}
                alt="mia teaching pilates" />
              </div>

            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Open Sky Body & Mind session</h2>
            </Col>
          </Row>

          <Row>

            <p>
              Joyful movement that focuses on
              flexibility and ease of movement.
              Emphasis on a positive mindset
              while stretching the body, 
              lengthening the spine, 
              decompressing & bringing stability
              to all the joints to provide balance 
              to the entire body.
            </p>

            <p>
              Some experienced hands on stretching, adjusting and 
              massage techniques applied during the session.
            </p>
            
            <p>
              Once the body has been worked, opened & is responsive, the session will end in a short guided meditation to bring a holistic sense of peace & wellbeing. All levels and abilities welcome!

            </p>
          </Row>
        </Container>



      </div>
    </div>
  );
}

export default MovementInfoPage;