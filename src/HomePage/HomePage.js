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

            <div className="services-section">
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

            </div>

                <Link to="/about">
                    <Button variant="gold">Learn More</Button>
                </Link>



        </div >
    );
}

export default HomePage;
