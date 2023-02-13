import React from 'react';
// import {Redirect} from 'react-router-dom'
import LoginButton from './Login-button';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
// export const RenderPage = () => {
//   const { isAuthenticated } = useAuth0();
//   //need to make function that verifies if the user is logged and then renders the
// //Main Page route if logged in
//    return isAuthenticated ? <Redirect to="/mainpage"/> : <Redirect to="/"/>
// }

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  //render the Mainpage on isAuthenticated
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;

