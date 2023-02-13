import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Psignuptext.css"
import logo from "../assets/woodenShield.png"
import Parallax from 'parallax-js'
//import parallax from parallax-js
import { useEffect } from 'react';

const PSignuptext = () => {
  const { loginWithRedirect } = useAuth0();
//we have to use useEffect because we have instantiate the parallaxInstance after the DOM is loaded
  useEffect(() => {
    var scene = document.getElementById('scene');
   var parallaxInstance = new Parallax(scene);

})
  
  return (
    <div id="scene">
        {/* data-depth represents different layers on the page */}
                    <div data-depth="0.2">
                        
                    <h2  >New <br></br> Adventure</h2> 
                    </div>
                
    
      
    
    </div> 
 );
};

export default PSignuptext;