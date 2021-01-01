import React from 'react';
import './HomePage.css';

// Bootstrap Components
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function HomePage() {
    return (
      <div className="HomePage">
        <Jumbotron>
            
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
      </div>
    );
  }
  
  export default HomePage;
  