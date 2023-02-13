//Displaying text based off username
//Clickable button which logs out user
import logo from '../../src/AuthFolder/assets/wolfsword.png'
import './Currentuser.css'

import AuthenticationButton from "../AuthFolder/components/AuthenticationButton";

const Currentuser = ({ userName }) => {
    return (

        <div className='userbox'>
            {/* <img src={logo} width='200'></img> */}
            <div className='usernametext' username="UserName">Welcome, {userName}</div>
            <div id='logout'><AuthenticationButton /></div>
        </div>
    )
}



function logoutFunction() {
    console.log("good")
}

export default Currentuser;
