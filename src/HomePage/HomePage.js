import React from 'react';
import './HomePage.css';

import { Link } from 'react-router-dom';

//Carousel
import Carousel from 'react-bootstrap/Carousel';
import studioImage1 from '../images/studio-img-1.jpg';
import studioImage2 from '../images/studio-img-2.jpg';
import studioImage3 from '../images/studio-img-3.jpg';


// import CardComponent from '../components/CardComponent';

//Card
import { Card, CardDeck } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pilates from '../images/pilates.jpg';
import massage from '../images/massage.jpg';
import stretching from '../images/stretching.jpg';


function HomePage() {
    return (
        <div className="HomePage">

            <div className="studio-slideshow">
                <Carousel>
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

            <div className="studio-section">

                <h2 className="header">The Studio</h2>
                <p className="studio-description">
                    Established in 1995 in Wallingford as Legacy
                    Pilates as an authentic, classical Pilates Studio
                    with Massage therapy, Open Sky Studio incorporates
                    over 25 years of experience and evolution to offer
                    an experience that feels unique & personal, catering
                    to your specific needs.
                </p>
                <p className="studio-description">
                    At Open Sky Studio, every client is treated with respect,
                    attention and individual focus. It is a place to actively
                    participate in your own physical, mental, creative and
                    emotional well being.

                </p>

                <h5>“A PLACE TO COME HOME TO YOURSELF”</h5>
            </div>

            <div className="services-section">
                <h2>Services</h2>
                {/* CardComponent("Pilates", "test", "/pilates"); */}
                <style type="text/css">
                    {`
                        .btn-gold {
                        background-color: #dd9866;
                        color: white;
                        }
                    `}
                </style>
                <CardDeck>
                    <Card className="services-card" style={{ width: '15rem', }}>
                        <Card.Img variant="top" src={pilates} />
                        <Card.Body>
                            <Card.Title>PILATES</Card.Title>
                            <Card.Text>
                                A exercise method
                                started that
                                focuses on flexibility, strength and posture.
                                Every exercise is designed to provide ease
                                and efficiency and movement.
                        </Card.Text>
                            <Link to="/pilates">
                                <Button variant="gold">
                                    Learn More
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>


                    <Card className="services-card" style={{ width: '10rem', }}>
                        <Card.Img variant="top" src={massage} />
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

                    <Card className="services-card" style={{ width: '10rem', }}>
                        <Card.Img variant="top" src={stretching} />
                        <Card.Body>
                            <Card.Title>STRETCHING</Card.Title>
                            <Card.Text className="card-text">
                                Sessions incorporate everything
                                in the entire studio with the emphasis on
                                becoming more flexible.
                        </Card.Text>
                            <Link to="/stretching">
                                <Button variant="gold">
                                    Learn More
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </div>

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
                <Button variant="gold">Learn More</Button>
            </div>

            {/* <div id="testimonials">
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                    <Carousel.Item>

                    </Carousel.Item>
                </Carousel>
            </div> */}

        </div >
    );
}

export default HomePage;
