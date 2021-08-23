import React from 'react';
import './AboutMe.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="about-section">
        <Container>
          <Row>
            <Col>
              <h2>About Mia</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Mia is the owner/director of Open Sky Studio
                and has an extensive background in bodywork
                and wellness. She studied Pilates in New York
                City with Romana Kryzanowska (personally chosen
                by Joseph Pilates to be the custodian of his
                entire body of work) for three years and became
                certified by Romana in Authentic Pilates in 1992.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Mia is a massage therapist licensed by The Brian
                Utting School of Massage in 1998 and specializes
                in Swedish, Deep tissue & Thai Yoga Massage.
                22 years of massage experience & undivided,
                caring attention can be felt in every massage.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Mia began dancing at the age of 2 and got her
                BFA in dance from Cornish College of the Arts,
                she danced professionally, was a Sports & fitness
                director for Royal Caribbean Cruise Line, a lifelong
                student of Yoga- there has never been a time in Mia’s
                life where she wasn’t focused on physical wellness.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                After traveling to Rishekesh, India for an intensive
                6 week Yoga certification, Mia decided to focus her
                energy on a deeper, more meaningful pursuit than
                superficial physical fitness. She appreciated that
                Yoga was so much deeper than an exercise method
                & that ultimately it leads to stillness, meditation
                and quieting the mind. Mia is dedicated to offering
                a space that does not focus on the pursuit of thinness
                and calling it wellness. Focusing on her own relationship
                with food, exercise and her weight has illuminated a
                deep desire to help others find peace in their bodies
                & to be present & content with what is.
              </p>
            </Col>
          </Row>
        </Container>






      </div>

    </div>
  );
}

export default AboutPage;