import React from 'react';
import pilates from '../images/pilates.jpg';
import './ServicesPages.css';

function PilatesInfoPage() {
    return (
      <div className="PilatesInfoPage">
        <img className = "pilates-img" src = {pilates}
        alt ="picture of mia teaching pilates"/>
      </div>
    );
  }

  export default PilatesInfoPage;