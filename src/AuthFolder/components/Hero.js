import React from "react";

import logo from "../assets/sword.png";
import ChoosePage from "./ChoosePage";
import LoginButton from "./Login-button";

const Hero = () => (
  <div className="text-center hero my-5">
    <ChoosePage/>
    
    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
    <LoginButton/>
  </div>
);

export default Hero;
