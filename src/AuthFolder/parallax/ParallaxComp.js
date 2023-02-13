import Parallax from 'parallax-js'
import { useEffect } from 'react';
import logo from '../assets/wolfsword.png'


const ParallaxComp = () => {
    useEffect(() => {
                 var scene = document.getElementById('scene');
                var parallaxInstance = new Parallax(scene);
        
    })
    
    return(
        <div className='parallaxscene'>
            <div id="scene">
                    <div data-depth="0.2" style={{position: 'absolute', display: 'block', left: '100px', top: '0px'}}>My first Layer! <img src={logo} width={'200px'}/> </div>
                    <div data-depth="0.6">My second Layer! <img src={logo} width={'200px'}/> </div>
                </div>
            
        </div>
    )
}

export default ParallaxComp


{/* <li class="layer" data-depth="0.00" style="position: relative; display: block; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden;"></li> */}
// style={{width: '420px', position: 'relative', right: '3%'}}
// , transform: 'translate3d(0px, 0px, 0px)', transform-style: 'preserve-3d'