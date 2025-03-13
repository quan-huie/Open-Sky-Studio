import React from 'react';
import './PricingPage.css';

function PricingPage() {
    return (
      <div className="PricingPage">
          <h2>Rates</h2>
        <div className = "pricing-section">
          <h3>OPEN SKY BODY & MIND SESSION </h3>
          <h4><em>
            (Movement, assisted stretching & meditation)
            </em>
          </h4>
          <br/>
          <h5>50 minutes (priced per person)</h5>
            <p>Private session (50 min) $80
            <br/>Duet session (50 min) $55
            <br/>Trio session (50 min) $45
            <br/>Quad session (50 min) $35
          </p>

          <h5>80 minutes (priced per person)</h5>
            <p>Private session (80 min) $130
            <br/>Duet session (80 min) $80
            <br/>Trio session (80 min) $70
            <br/>Quad session (80 min) $60</p>

        </div>

        <div className = "pricing-section">
          <h3>MASSAGE</h3>
          <p>MASSAGE classic or Thai Yoga (60 min) $130</p>
          <p>MASSAGE classic or Thai Yoga (90 min) $160</p>
        </div>

        <div className = "pricing-section">
          <h3>MEDITATION (ONLY)</h3>
          <h5>30 minutes (priced per person)</h5>
            <p>
                Private session (30 min) $35
                <br/>Duet session (30 min) $25
                <br/>Trio session (30 min) $20
                <br/>Quad session (30 min) $15
                <br/>Five person session (30 min) $10
            </p>

          <h5>50 minutes (priced per person)</h5>
            <p>Private session (50 min) $55
            <br/>Duet session (50 min) $45
            <br/>Trio session (50 min) $35
            <br/>Quad session (50 min) $30
            <br/>Five person session (50 min) $25
          </p>
        </div>
      </div>
    );
  }

  export default PricingPage;
