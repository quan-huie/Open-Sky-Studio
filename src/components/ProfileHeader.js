import React from 'react';
import './ProfileHeader.css';

function ProfileComponent({profilePic, profilePicDesc, profileTitle, profileText}) {
  return (
    <div className="circle-container">

        <div className="circle-image">
            <img src={profilePic} alt={profilePicDesc} />
        </div>
        <div className="text-container">
            <p>{profileText}</p>
        </div>
    </div>

  );
}

export default ProfileComponent;