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
              <h2>PILATES</h2>
            </Col>
          </Row>

          <Row>

            <p>
              PILATES is a specific exercise
              method started in 1923 by Joseph
              H Pilates that focuses on flexibility,
              strength and posture. Every exercise
              is designed to provide ease and efficiency
              of movement. Emphasis on strengthening the
              core muscles while stretching the body,
              lengthening the spine, decompressing all
              the joints and bringing balance to the
              entire body. All levels and abilities welcome!
            </p>
          </Row>
        </Container>



      </div>
    </div>
  );
}

export default MovementInfoPage;