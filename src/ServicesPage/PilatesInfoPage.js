import React from 'react';
import pilates from '../images/pilates.jpg';
import './ServicesPages.css';

function PilatesInfoPage() {
  return (
    <div className="PilatesInfoPage">
      <div className="fluid-container">
        <img className="pilates-img" src={pilates}
          alt="mia teaching pilates" />

        <h2>PILATES</h2>
        <p>
          PILATES is a specific exercise
          method started in 1923 by Joseph
          H Pilates that focuses on flexibility,
          strength and posture. Every exercise
          is designed to provide ease and efficiency
          of movement. Emphasis on strengthening the
          core muscles while stretching the body,
          lengthening the spine, decompressing all
          the joints and bringing balance to the
          entire body. All levels and abilities welcome!
        </p>
      </div>
    </div>
  );
}

export default PilatesInfoPage;