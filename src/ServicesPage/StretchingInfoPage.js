import React from 'react';
import './ServicesPages.css';
import { Container, Row, Col, } from 'react-bootstrap';

function StretchingInfoPage() {
  return (
    <div className="StretchingInfoPage">
      <div className="fluid-container">
      <Container>
        <Row>
          <Col className="stretching-header">
          <h2>STRETCHING</h2>

          </Col>
        </Row>

        <Row>
          <Col>
          <p>
          STRETCHING sessions incorporate
          everything in the entire studio
          with the emphasis on becoming
          more flexible. Catering to the
          individual, guidance is provided
          for improved range of motion & mobility.
          Using equipment, foam rollers,
          yoga straps, warm vibrating massage
          balls, and instructor assisted
          stretching and compression, you will
          leave feeling looser and more flexible.
        </p>
          </Col>
        </Row>

      </Container>


      </div>
    </div>
  );
}

export default StretchingInfoPage;