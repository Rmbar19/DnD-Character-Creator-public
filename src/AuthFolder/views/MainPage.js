import AuthenticationButton from '../components/AuthenticationButton'

import '../../App.css'

import Charactersheets from '../../frontend/Charactersheets'
import NewCharacter from '../../frontend/Newcharacter'
import Currentuser from '../../frontend/Currentuser'
import Tutorial from '../../frontend/Tutorial'

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//User verification

//update table to include all user fields
//make the sub as the primary key
//built in user verification occurs when the primary key is pushed to the database




function MainPage() {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { picture, email, sub, nickname } = user;

  const [userId, setUserId] = useState('')
  const [userName, setUserName] = useState('')

  const [characterSheets, setCharacterSheets] = useState('');
  const [allCharacterSheets, setAllCharacterSheets] = useState([])
  const [clickedCharacter, setClickedCharacter] = useState('');
  const [updateCharSheets, setUpdateCharSheets] = useState(false)

  const [newSheet, setNewSheet] = useState(false);

  useEffect(() => {

    if (characterSheets !== '') {
      console.log('character', JSON.stringify(clickedCharacter))
      if (!newSheet) {

        const options = {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...clickedCharacter,
            ability_scores:JSON.stringify(clickedCharacter.ability_scores),
            saving_throws:JSON.stringify(clickedCharacter.saving_throws),
            coins:JSON.stringify(clickedCharacter.coins),
            proficiencies:JSON.stringify(clickedCharacter.proficiencies),
            features_traits:JSON.stringify(clickedCharacter.features_traits)

          }),
        }


        fetch(`http://localhost:8080/user-character/${clickedCharacter.name}`, options)
          .then(result => (result.json()))
          .then(data => {

            setUpdateCharSheets(!updateCharSheets)
            // loadCharacter();
          })
          .catch(error => {
            console.log(error)
          })

      } else {

        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(characterSheets),
        }

        fetch("http://localhost:8080/user-character", options)
          .then(result => (result.json()))
          .then(data => {

            setUpdateCharSheets(!updateCharSheets)
            // loadCharacter();
          })
          .catch(error => {
            console.log(error)
          })
      }

    } else {
      fetch(`http://localhost:8080/user-character/${userId}`, { method: 'get' })
        .then(res => res.json())
        .then(charSheets => {

          setAllCharacterSheets([
            ...charSheets
          ])
        })
        .catch(error => console.log(error))
    }

  }, [characterSheets])

  useEffect(() => {

    fetch(`http://localhost:8080/user-character/${userId}`)
              .then(res => res.json())
              .then(charSheets => {

                setAllCharacterSheets([
                  ...charSheets
                ])
              })
              .catch(error => console.log(error))

  }, [updateCharSheets])

  function currentCharacterSheet(characterSheet) {
    console.log(characterSheet)
    setNewSheet(false);
    setCharacterSheets(characterSheet)
  }

  function createCharacterSheet(characterSheet) {
    setNewSheet(true);
    setCharacterSheets(characterSheet)
  }

  useEffect(() => {
    setUserName(nickname);
    setUserId(sub);
    pushsub();
  }, [])

  // console.log("MainPage.js { user }", user)
  // console.log(" from useAuth0(), sub and nickname", sub, nickname)
  // console.log(' from our hooks, userid and username', userId, userName)


  /////////// Add logic to check if user is already in database, if not invoke//////////////////////
  /////////// this function to post their unique ID and username/////////////////////////////////
  /////////// Add logic to check if user is already in database, if not invoke//////////////////////
  /////////// this function to post their unique ID and username/////////////////////////////////
  function pushsub() {
    //console.log("object pushed to authuser table in DB", { username: nickname, userid: sub, email: email, picture: picture })
    var obj = { username: nickname, userid: sub, email: email, picture: picture }
    fetch('http://localhost:8080/', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)

    }).then(() => {
      console.log("post is done");
    })
    /////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////
    // loadCharacter={loadCharacter}

  }
  // We made this button to do a fetch post of the unique ID for a new user, use it if needed
  /* <button onClick={pushsub}> Save </button> */

  return (
    <div className="App">
      <div className='mainpagediv'>
        <Currentuser userName={userName} />
        <Charactersheets allCharacterSheets={allCharacterSheets} updateCharSheets={updateCharSheets} setUpdateCharSheets={setUpdateCharSheets} userId={userId} characterSheets={characterSheets} setClickedCharacter={setClickedCharacter} clickedCharacter={clickedCharacter} />
        <NewCharacter createCharacterSheet={createCharacterSheet} userId={userId} currentCharactersheet={currentCharacterSheet} clickedCharacter={clickedCharacter} setClickedCharacter={setClickedCharacter} />
        <Tutorial />
      </div>
    </div>
  );
}

export default MainPage;