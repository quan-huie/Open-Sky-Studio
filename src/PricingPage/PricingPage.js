import React from 'react';
import './PricingPage.css';

function PricingPage() {
    return (
      <div className="PricingPage">
          <h2>Rates</h2>
        <div className = "pricing-section">
          <h3>Pilates</h3>
          <p>PILATES private lesson (50 min) $75</p>
          <p>PILATES duet lesson (50min) $50</p>

        </div>

        <div className = "pricing-section">
          <h3>Massage</h3>
          <p>MASSAGE classic or Thai Yoga (60min) $115</p>
          <p>MASSAGE classic or Thai Yoga (90min) $150</p>
        </div>

        <div className = "pricing-section">
          <h3>Meditation</h3>
          <p>MEDITATION private session (30min) $50</p>
          <p>MEDITATION private session (50min) $75</p>
        </div>
      </div>
    );
  }

  export default PricingPage;