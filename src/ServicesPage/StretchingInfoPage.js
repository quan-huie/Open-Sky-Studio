import React from 'react';
import pilates from '../images/pilates.jpg';
import './ServicesPages.css';
import { Container, Row, Col, } from 'react-bootstrap';

function  StretchingInfoPage() {
  return (
    <div className="StretchingInfoPage">
      <div className="fluid-container">
        <Container>
          <Row>
            <Col>
              <h2>Stretching</h2>
            </Col>
          </Row>

          <Row>

            <p>
                STRETCHING sessions incorporate 
                everything in the entire studio 
                with the emphasis on becoming 
                more flexible. Catering to the 
                individual, guidance is provided
                for improved range of motion & mobility.
                Using equipment, foam rollers, yoga straps,
                warm vibrating massage balls, and instructor 
                assisted stretching and compression, you will 
                leave feeling looser and more flexible.
            </p>
          </Row>
        </Container>



      </div>
    </div>
  );
}

export default StretchingInfoPage;