import React from 'react';
import './ServicesPages.css';
import { Container, Row, Col, } from 'react-bootstrap';

function MassageInfoPage() {
  return (
    <div className="MassageInfoPage">
      <div className="fluid-container">
        <Container>
          <Row>
            <Col>
              <h2>SWEDISH MASSAGE</h2>

            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Sometimes referred to as a
                “Classic Massage” it is done on
                a massage table, unclothed
                under sheet, oils & lotions
                are used. The pressure is generally
                gentle to moderate with the intention
                to promote relaxation by releasing
                muscle tension.
              </p>
            </Col>
          </Row>

        </Container>

      {/* </div> */}


      {/* <div className="fluid-container"> */}
        <Container>
          <Row>
            <Col>
              <h2>DEEP TISSUE MASSAGE</h2>

            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Done on a massage table,
                unclothed under a sheet, oils
                & lotions are used. While the
                massage begins like a traditional
                relaxation massage, after the
                muscles are warmed up, deliberate
                pressure is applied to work at a
                deeper level. Deep tissue massage
                facilitates healing by releasing
                deep tension that causes pain & injuries.
              </p>
            </Col>
          </Row>
        </Container>

      {/* </div> */}


      {/* <div className="fluid-container"> */}
        <Container>
          <Row>
            <Col>
              <h2>THAI YOGA MASSAGE</h2>

            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Done on a mat on the floor
                while the recipient is wearing
                comfortable clothing that is easy
                to move in. The therapist uses their
                hands, knees, legs and feet to move
                the client into a series of yoga-like
                stretches and also applies deep muscle
                compression, joint mobilization and acupressure.
              </p>
            </Col>
          </Row>
        </Container>


      </div>
    </div>
  );
}

export default MassageInfoPage;