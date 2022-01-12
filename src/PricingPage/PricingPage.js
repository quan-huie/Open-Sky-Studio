import React from 'react';
import './PricingPage.css';

function PricingPage() {
    return (
      <div className="PricingPage">
          <h2>Rates</h2>
        <div className = "pricing-section">
          <h3>OPEN SKY BODY & MIND SESSION </h3>
          <h4><em>
            (Movement,assisted stretching & meditation)
            </em>
          </h4>
          <br/>
          <h5>50 minutes</h5>

          <p>Private session (50 min) $75
            <br/>Duet session (50min) $50
            <br/>Trio session (50 min) $40
            <br/>Quad session (50 min) $30
          </p>

          <h5>80 minutes</h5>
          <p>Private session (80 min) $90
            <br/>Duet session (80 min) $75
            <br/>Trio session (80 min) $65
            <br/>Quad session (80 min) $55</p>

        </div>

        <div className = "pricing-section">
          <h3>MASSAGE</h3>
          <p>MASSAGE classic or Thai Yoga (60min) $115</p>
          <p>MASSAGE classic or Thai Yoga (90min) $150</p>
        </div>

        <div className = "pricing-section">
          <h3>MEDITATION (ONLY)</h3>
          <h5>30 minutes</h5>
          <p>Private session (30 min) $30
            <br/>Duet session (30min) $20
            <br/>Trio session (30 min) $15
            <br/>Quad session (30 min) $10
          </p>

          <h5>50 minutes</h5>
          <p>Private session (50 min) $50
            <br/>Duet session (50min) $35
            <br/>Trio session (50 min) $25
            <br/>Quad session (50 min) $20
          </p>
        </div>
      </div>
    );
  }

  export default PricingPage;