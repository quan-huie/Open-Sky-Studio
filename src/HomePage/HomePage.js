import React from 'react';
import './HomePage.css';
import banner from '../images/open-sky-banner.jpg';

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


function HomePage() {
    return (
        <div className="HomePage">
            {/* <img className="banner" src={banner}alt="open-sky-banner"></img> */}
            <div className="">
                {/* <article className="index-intro">
                    <div className="jumbotron">
                        <div className="banner-image">
                            <img className="banner"
                                src={banner}
                                alt="open-sky-banner">
                            </img>
                            <h1 className="banner-title">Open Sky Studio</h1>
                        </div>
                    </div>
                </article> */}

            </div>

            <div className="studio-slideshow">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={studioImage1}
                            alt="studio image with reformers"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={studioImage2}
                            alt="studio image with reformers no painting"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={studioImage3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="studio-section">

                <h2 className="header">The Studio</h2>
                <p className="studio-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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
                <Card className="services-card" style={{ width: '10rem', }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Pilates</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </Card.Text>
                        <Link to="/pilates">
                            <Button variant="gold">
                                Learn More
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>


                <Card className="services-card" style={{ width: '10rem', }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Massage</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </Card.Text>
                        <Link to="/massage">
                            <Button variant="gold">
                                Learn More
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
                </CardDeck>

            </div>

        </div >
    );
}

export default HomePage;
