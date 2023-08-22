import React from 'react';
import './AboutMe.css'
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="about-section">
        <Container>
          <Row>
            <Col>
              <h2>Mia Heller</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
              Mia is the owner/director of Open Sky Studio
              and has spent her life focused on movement,
              wellness & bodywork. 
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
              Mia began dancing at the age of 2, began assistant
              teaching as a teenager, earned her BFA in dance from
              Cornish College of the Arts, she danced professionally,
              was a Sports & Fitness Director for Royal Caribbean 
              Cruise Line and is a lifelong student of yoga. 
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Mia studied Pilates in New York and was certified 
                by Romana Kryzanowska in Authentic Pilates in 1992.
                Mia established Legacy Pilates in 1995 as an Authentic,
                classical Pilates Studio.  Mia became a licensed massage
                therapist from The Brian Utting School of Massage in 1998 
                and incorporated massage into her business to offer a more 
                well-rounded service to her clients & to be able to understand 
                her clients on a deeper level. 
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
                Mia has been meditating daily for over 17 years, 
                has studied with many teachers and practiced different 
                techniques through the years. In 2018 Mia traveled to 
                Rishikesh India to become certified in yoga and meditation 
                from the Sattva Yoga Academy. During this immersive experience, 
                she saw that all the physical disciplines she had practiced and 
                taught her entire life were the gateway into the ultimate goal of a 
                much deeper, real & sustainable pursuit: Peace of Mind.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
               Mia moved her studio & changed the name and focus of her 
               business in 2020 to better reflect the evolution of her life’s 
               work. Transitioning the primary focus from Pilates and physical 
               fitness toward a deeper, sustainable, peaceful relationship with 
               our bodies, our minds & our emotions.

              </p>
            </Col>
          </Row>
        </Container>






      </div>

    </div>
  );
}

export default AboutPage;