import React from 'react';
import './ArtworkPage.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import artData from '../components/data/artwork.json';

function ArtworkPage() {
  return (
    <div className="ArtworkPage">
      <div className="about-section">
        <Container>
          <Row>
            <Col>
              <h2>Artwork</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
              In the style of mystical realism, Mia’s dream-like paintings activate the viewer’s 
              imagination with evocative images of nature. Mia is a multimedia painter, 
              utilizing acrylics, markers & oil paints, finished in a high gloss varnish. 
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>
              Original artwork can be viewed in person by appointment at Open Sky Studio. 
              Prices and descriptions are updated on her website under the Art tab.
              </p>
            </Col>
          </Row>


        </Container>

        {/* Display the paintings */}
      <Container>
        <Row xs={1} md={3} className="g-4 artwork-card-grid">
          {artData.map((artwork) => (
            <Col key={artwork.key} className="mb-4">
              <ArtCard artwork={{ ...artwork, isSold: JSON.parse(artwork.isSold) }} />
            </Col>
          ))}
        </Row>
      </Container>


      </div>

    </div>
  );
}

// function ArtCard({ artwork }) {
//     return (
//         <Card>
//             <img href="./forbidden_art.jpg"></img>
//             <Card.Img variant="top" src={artwork.image} alt={artwork.name} />
//             <Card.Body>
//               <Card.Title>{artwork.name}</Card.Title>
//               {/* <Card.Text>{artwork.description}</Card.Text> */}
//               <Card.Text>Price: {artwork.price}</Card.Text>
//               <Card.Text>Size: {artwork.size}</Card.Text>
//             </Card.Body>
//         </Card>
//     )
// }

function ArtCard({ artwork }) {
    return (

        <Card className="art-card">
            <div className="image-container">
              {artwork.isSold && <div className="sold-tab">Sold Out</div>}
              <img src={artwork.image} alt={artwork.name} />
              <div className="overlay">
                <div className="overlay-content">
                  <Card.Title>{artwork.name}</Card.Title>
                  <Card.Text>Price: {artwork.price}</Card.Text>
                  <Card.Text>Size: {artwork.size}</Card.Text>

                  {/* If you want to add descriptions, uncomment this. Won't work on long text. */}
                  {/* <Card.Text>: {artwork.description}</Card.Text> */}

                </div>
              </div>
            </div>
        </Card>
    );
  }
  

export default ArtworkPage;