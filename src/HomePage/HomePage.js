import React from 'react';
import './HomePage.css';

import { Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
//Carousel
import Carousel from 'react-bootstrap/Carousel';
import studioImage1 from '../images/studio-img-1.jpg';
import studioImage2 from '../images/studio-img-2.jpg';
import studioImage3 from '../images/studio-img-3.jpg';
import studioImage4 from '../images/studio-img-4.jpg';

//Card
import Button from 'react-bootstrap/Button';
import pilates from '../images/pilates.jpg';
import massage from '../images/massage-1.jpg';
import stretching from '../images/meditation.jpg';
import mia_banner from '../images/mia_banner.jpg'


function HomePage() {
    return (
        <div className="HomePage">
            <Container fluid>
                <Row>
                    <Col>
                    <div className="mia_banner">
                        <div className="banner-background" />
                        <div className="main-image-container">
                          <img src={mia_banner} alt="mia in the woods looking up to the sky" />
                        </div>
                    </div>   
                    </Col>
                </Row>
                    <Col>
                        <div className="about-mia" >
                            <h2>About Mia</h2>
                            <p className="studio-description" >
                                Mia is continually growing and
                                evolving her skills. She has spent
                                her entire life dedicated to helping
                                others to become the best versions
                                of themselves. Her intention is to
                                deeply listen and help every client
                                feel better on every level for having
                                spent time in her studio.

                            </p>
                        </div>
                    </Col>
                
                <Row>
                    <Col className="studio-slideshow">
                        <div className="">
                            <Carousel>
                            <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studioImage4}
                                        alt="outside the studio"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studioImage1}
                                        alt="studio with reformers"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studioImage2}
                                        alt="studio with reformers no painting"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studioImage3}
                                        alt="reformer"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col>
                        {/* <div > */}

                        <h2 className="header">The Studio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="studio-description">
                        Open Sky Studio offers private and 
                        semi- private personalized sessions
                        that include movement, assisted 
                        stretching, massage & meditation.
 
                        </p>
                        <p className="studio-description">
                        Established in 1995 in Wallingford 
                        as Legacy Pilates, Open Sky Studio 
                        incorporates over 25 years of experience
                        to offer sessions that are unique, 
                        personal, and tailored to address your specific needs. 

                        </p>
                        <p className="studio-description">
                        At Open Sky Studio, every client is 
                        treated with respect, attention, and 
                        individual focus. It is a place to actively
                        participate in your own physical, mental, 
                        creative and emotional wellbeing.
                        </p>

                        {/* </div> */}
                    </Col>

                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col className="studio-section">
                        <h4>“A PLACE TO COME HOME TO YOURSELF”</h4>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <h2>Services</h2>
                        {/* Create a new style variant that can be used in bootstrap */}
                        <style type="text/css">
                            {`
                        .btn-gold {
                        background-color: #e3ba9d;
                        color: white;
                        }

                        .btn:hover {
                            color: #e1cec1;
                        }
                    `}
                        </style>
                    </Col>
                </Row>

                <Row>
                    <CardGroup>
                        <Col xs={12} md={4} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={pilates} alt="A person teaching pilates"/>
                                <Card.Body>
                                    <Card.Title>MOVEMENT</Card.Title>
                                    <Card.Text>
                                        Gentle exercises to enhance 
                                        flexibility and ease of movement.
                                        Emphasizing joy of movement and 
                                        positive reinforcement and promotes
                                        energy and vitality.
                                    </Card.Text>
                                    <Link to="/movement">
                                        <Button variant="gold">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} md={4} lg={4}>
                            <Card>
                                <Card.Img variant="top" src={massage} alt="A person recieving a massage"/>
                                <Card.Body>
                                    <Card.Title>MASSAGE</Card.Title>
                                    <Card.Text className="card-text">
                                        We offer multiple forms of massage such as
                                        Swedish Massage, Deep Tissue Massage, and
                                        Thai Yoga Massage.
                                    </Card.Text>
                                    <Link to="/massage">
                                        <Button variant="gold">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} md={4} lg={4}>

                            <Card>
                                <Card.Img variant="top" src={stretching} alt="A person stretchiing"/>
                                <Card.Body>
                                    <Card.Title>MEDITATION</Card.Title>
                                    <Card.Text className="card-text">
                                        Live, personalized guided meditation
                                        utilizing wireless headphones to 
                                        minimize external distractions and
                                        create an immersive experience.  
                                        Each session features a combination
                                        of soothing music, calming sound baths, 
                                        nature audio and live instruction designed 
                                        to carry you to your peaceful core.
                                    </Card.Text>
                                    <Link to="/meditation">
                                        <Button variant="gold">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </CardGroup>

                </Row>



            </Container>

            

                <div id="testimonials">
                    <h2>Testimonials</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src=""
                                alt=" "
                            />
                            <Carousel.Caption>
                                <h3>“I was Mia’s first massage client over 22 years ago and am still.
                                    I cannot recommend her highly enough. I would give her 6 stars out of 5.”</h3>
                                <p><em>- Paul V.</em></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt=" "
                            />

                            <Carousel.Caption>
                                <h3>
                                    “Mia is a treasure.  Her vision, talent and wisdom as a
                                    teacher/guide are pitch perfect.
                                    She has a fierce ability to love her clients through the
                                    seemingly impossible parts. Her faith in us makes doing
                                    the ‘hard stuff’ possible and even joyful”
                                </h3>
                                <p><em>- Jan E.</em></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt=" "
                            />

                            <Carousel.Caption>
                                <h3>“I have enjoyed the benefits of Mia’s truly expert instruction
                                    in the Pilates method, as well as traditional and Thai yoga
                                    massage.  It has been my good fortune to study with such an
                                    outstanding teacher for the past 24 years”</h3>
                                <p><em>- Nancy V.</em></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt=" "
                            />

                            <Carousel.Caption>
                                <h3 className="fourth-testimonial">
                                    "Mia is an experienced, skillful and astute Pilates
                                    instructor. She meets you right where you are and
                                    creates a detailed workout tailored to fit your
                                    needs and provide the appropriate amount of
                                    challenge.  Mia is thoughtful, patient, funny,
                                    and, intuitive. I feel grateful for the opportunity
                                    to work consistently with her and develop new
                                    healing patterns in my body these past few years."
                                </h3>
                                <p><em>- Kimberly R.</em></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Link to="/about">
                        <Button variant="gold">Learn More About Mia</Button>
                    </Link>
                </div>


            </div>

    );
}

export default HomePage;
