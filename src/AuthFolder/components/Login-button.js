import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Loginbutton.css"
import logo from "../assets/metalshield.png";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button id='loginbutton'
      className="btn btn-block"
      onClick={() => loginWithRedirect()}
      
      style={{ backgroundImage: `url(${logo})` }} >  
    <img src={logo} width='200px'></img>
    <span className='text-on-image'>Continue Adventure</span>
     
    </button>
  );
};

export default LoginButton;

