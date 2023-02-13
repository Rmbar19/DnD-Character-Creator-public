import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Psignupbutton.css"
import logo from "../assets/woodenShield.png"
import Parallax from 'parallax-js'
//import parallax from parallax-js
import { useEffect } from 'react';

const PSignupButton = () => {
  const { loginWithRedirect } = useAuth0();
//we have to use useEffect because we have instantiate the parallaxInstance after the DOM is loaded
  useEffect(() => {
    var scene = document.getElementById('scene');
   var parallaxInstance = new Parallax(scene);

})
  
  return (
    <div id="scene">
        {/* data-depth represents different layers on the page */}
                    <div data-depth=".2">
                        {/* each depth layer div can contain an html element */}
                        
                        <button id='pshield' className="btn  btn-block" onClick={() => loginWithRedirect({screen_hint: 'signup',})} >
                                    <img src={logo} width='200px'></img>
                                          {/* <span className='shield-text' >New <br></br>Adventure</span> */}
                    </button>                    
                    </div>
        {/* data-depth represents different layers on the page */}
                    <div id='textdiv' data-depth="0.6"> 
                    <h2  >New <br></br> Adventure</h2> 
                    </div>
                   
                
    
      
    
    </div> 
 );
};

export default PSignupButton;

{/* <img className='btn btn-block' id='pshield' src={logo} width='200px'  onClick={() => loginWithRedirect({screen_hint: 'signup',})}></img> */}
