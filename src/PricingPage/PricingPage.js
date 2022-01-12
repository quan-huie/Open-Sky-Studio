import React from 'react';
import './PricingPage.css';

function PricingPage() {
    return (
      <div className="PricingPage">
          <h2>Rates</h2>
        <div className = "pricing-section">
          <h3>OPEN SKY BODY & MIND SESSION </h3>
          <h3><em>
            (Movement,assisted stretching & meditation)
            </em>
          </h3>
          <h4>50 minutes</h4>
          <p>Private session (50 min) $75</p>
          <p>Duet session (50min) $50</p>
          <p>Trio session (50 min) $40</p>
          <p>Quad session (50 min) $30</p>

          <h4>80 minutes</h4>
          <p>Private session (80 min) $90</p>
          <p>Duet session (80 min) $75</p>
          <p>Trio session (80 min) $65</p>
          <p>Quad session (80 min) $55</p>

        </div>

        <div className = "pricing-section">
          <h3>MASSAGE</h3>
          <p>MASSAGE classic or Thai Yoga (60min) $115</p>
          <p>MASSAGE classic or Thai Yoga (90min) $150</p>
        </div>

        <div className = "pricing-section">
          <h3>MEDITATION (ONLY)</h3>
          <h4>30 minutes</h4>
          <p>Private session (30 min) $30</p>
          <p>Duet session (30min) $20</p>
          <p>Trio session (30 min) $15</p>
          <p>Quad session (30 min) $10</p>
        </div>

        <h4>50 minutes</h4>
          <p>Private session (50 min) $50</p>
          <p>Duet session (50min) $35</p>
          <p>Trio session (50 min) $25</p>
          <p>Quad session (50 min) $20</p>
        </div>
      </div>
    );
  }

  export default PricingPage;