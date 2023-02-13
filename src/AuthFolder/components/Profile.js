// src/views/profile.js

import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub } = user;
 
  //we need a button/function that access user.nickname and user.sub and pushes to a express server http route that is connected to a database///
  

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{sub}</h2>
          <h1>asdfasdlfkasjdlf</h1>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;