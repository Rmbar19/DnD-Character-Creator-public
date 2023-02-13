import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Signupbutton.css"
import logo from "../assets/woodenShield.png"

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button id='signupbutton'
      className="btn  btn-block"
      onClick={() => loginWithRedirect({screen_hint: 'signup',})}
        
    >
      <img src={logo} width='200px'></img>
      <span className='shield-text' >New <br></br>Adventure</span>
    </button>
  );
};

export default SignupButton;
