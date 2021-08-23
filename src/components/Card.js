import React from 'react';
import { Link } from 'react-router-dom';

//Card
import { Card, Button } from 'react-bootstrap';

function CardComponent(cardName, cardText, linkTo) {
  return (
    <div className="CardComponent">
      <style type="text/css">
      {`
      .btn-gold {
      background-color: #dd9866;
      color: white;
      }
    `}
      </style>

      <Card className="services-card" style={{ width: '18rem', }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{cardName}</Card.Title>
          <Card.Text>
            {cardText}
          </Card.Text>
          <Link to={linkTo}>
            <Button variant="gold">
              Learn More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;