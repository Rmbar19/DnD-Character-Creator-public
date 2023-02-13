import React from "react";
import SignupButton from "../../AuthFolder/components/SignupButton";
import LoginButton from "../../AuthFolder/components/Login-button"
import "./ChoosePage.css"
import { Row, Col } from "reactstrap";
import Parallax from 'parallax-js'
import AuthenticationButton from "../components/AuthenticationButton";
import PSignupButton from "../components/PsignupButton";
import PSignuptext from "../components/Psignuptext";
import Pbackground from "../components/Pbackground";
import Pcharacter from "../components/Pcharacters";






const ChoosePage = () => {

        return (
        
        <div  id="chooseadv">
 
                <Pbackground/>
                <SignupButton/>
               {/* <PSignupButton/> */}
                 
               {/* <PSignuptext/> */}
                <LoginButton/>
               
                
                <AuthenticationButton/>
                
           
   
           
        </div>
            

    )
    
}

export default ChoosePage;








// <p> 
//                 <a href="https://gfycat.com/entireenchantinggavial-darkest-dungeon">via Gfycat</a>
//                 </p> style='position:relative; padding-bottom:calc(56.25% + 44px)'