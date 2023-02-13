import React, {useRef} from 'react';

import Parallax from 'parallax-js'
import { useEffect } from 'react';
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"

import '../components/Pbackground.css'

 
const Pcharacter = () => {
    useEffect(() => {
        //identifying the element to add parallax effect to
        var scene = document.getElementById('scene');
       var parallaxInstance = new Parallax(scene);
    
    })
  return (
   <div id="scene" >
     
                    <div data-depth=".3">
                        <img id='image1' src={image1} style={{height: 175}}/>                       
                    </div>  
                    <div id='image2' data-depth=".6">
                    <img id='image1' src={image2} style={{height: 175}}/>   
                      </div>                  
    </div> 
 );
};

export default Pcharacter;

