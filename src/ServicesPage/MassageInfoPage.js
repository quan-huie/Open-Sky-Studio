import React from 'react';
import './ServicesPages.css';

function MassageInfoPage() {
  return (
    <div className="MassageInfoPage">
      <div className="fluid-container">

        <h2>SWEDISH MASSAGE</h2>
        <p>
          Sometimes referred to as a
          “Classic Massage” is done on
          a massage table, unclothed
          under sheet, oils & lotions
          are usedThe pressure in generally
          gentle to moderate with the intention
          to promote relaxation by releasing
          muscle tension.
        </p>
      </div>
      <div className = "fluid-container">
        <h2>DEEP TISSUE MASSAGE</h2>
        <p>
          Done on a massage table,
          unclothed under a sheet, oils
          & lotions are used. While the
          massage begins like a traditional
          relaxation massage, after the
          muscles are warmed up, deliberate
          pressure is applied to work at a
          deeper level. Deep tissue massage
          facilitates healing by releasing
          deep tension that causes pain & injuries.
        </p>
      </div>
      <div className ="fluid-container">
        <h2>THAI YOGA MASSAGE</h2>
        <p>
          Done on a mat on the floor
          while the recipient is wearing
          comfortable clothing that is easy
          to move in. The therapist uses their
          hands, knees, legs and feet to move
          the client into a series of yoga-like
          stretches and also applies deep muscle
          compression, joint mobilization and acupressure.
        </p>

      </div>
    </div>
  );
}

export default MassageInfoPage;