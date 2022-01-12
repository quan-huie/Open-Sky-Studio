import React from 'react';
import './ServicesPages.css';
import { Container, Row, Col, } from 'react-bootstrap';

function MeditationInfoPage() {
  return (
    <div className="MeditationInfoPage">
      <div className="fluid-container">
      <Container>
        <Row>
          <Col className="stretching-header">
          <h2>MEDITATION</h2>

          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Live, personalized guided meditation utilizing wireless
              headphones to minimize external distractions and create
              an immersive experience.  Each session features a 
              combination of soothing music, calming sound baths,
              nature audio and live instruction designed to carry 
              you to your peaceful core.
            </p>
          </Col>
        </Row>

      </Container>


      </div>
    </div>
  );
}

export default MeditationInfoPage;