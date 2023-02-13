import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/haversack_png.png'
import "../components/LogoutButton.css"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button id='logoutButton'
    className="btn  btn-block"
      onClick={() =>
        logout({returnTo: window.location.origin,})}
        
    >
      <img src={logo} width='200px'></img>
      <span className='logouttext' >Log </span>
      <span className='logouttext1'>Out</span>
      
      
    </button>
  );
};

export default LogoutButton;