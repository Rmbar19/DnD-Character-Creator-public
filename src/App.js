
import React from "react";
import { 
  Router,  
  Route, 
  Switch, Redirect
} from "react-router-dom";

import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./AuthFolder/utils/history";
import ChoosePage from "../src/AuthFolder/views/ChoosePage";
import MainPage from "../src/AuthFolder/views/MainPage"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";



const App = () => {
 const {isAuthenticated} =  useAuth0();

 

  return (
    <Router history={history} >
      <div id="app" className="d-flex flex-column h-100">
       
        
        
          <Switch>

            
            <Route exact path="/">
               {isAuthenticated ? <MainPage /> : <ChoosePage/>}
               </Route>
            
          </Switch>
        
      </div>
    </Router>
  );
};

export default App;


//use current Switch/Route above as sample to render Mainpage (App.js) in combined file.