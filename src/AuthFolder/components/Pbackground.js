import React from 'react';
import logo from "../assets/Bscroll.png"
//npm i -s parallax-js
// imported Parallax to use Parallax-js
import Parallax from 'parallax-js'
import { useEffect } from 'react';
//imported css file for background
import '../components/Pbackground.css'

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"

const Pbackground = () => {

//we have to use useEffect because we have instantiate the parallaxInstance after the DOM is loaded
  useEffect(() => {
    //identifying the element to add parallax effect to
    var scene = document.getElementById('scene');
   var parallaxInstance = new Parallax(scene);

})
  
  return (
    <div id="scene">
      {/* "data-depth" represents a layer on the screen */}
   
                    <div data-depth=".3">
                        {/* <img id='background' src={logo} style={{height: 650}}/> */}
                        
                       
                    </div>  
      {/* the greater the difference in value in data depth, the greater the movement */}
                    <div id='btext' data-depth=".6">
                      <span>Welcome to D and D Character Creator</span>
                      </div>        
                      <div data-depth=".4">
                        <img id='image1' src={image1} style={{height: 515}}/>                       
                    </div>  
                    <div id='image2' data-depth=".2">
                    <img id='image2' src={image2} style={{height: 515}}/>   
                      </div>           
 
    </div> 
 );
};

export default Pbackground;

