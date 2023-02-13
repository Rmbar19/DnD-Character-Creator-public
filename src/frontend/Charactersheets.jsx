import { useEffect, useState, React } from "react";
import "../loadcharacter.css";
import DeleteCharacter from "./DeleteCharacter";

const Charactersheets = (props) => {
  //    function addCharacter() {
  //     const options =  {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(props.characterSheets),
  //     }
  //   console.log(props.allCharacterSheets, "list of all character sheets");

  //     fetch("/user-character", options)
  //     .then(result => (result.json))
  //     .then(data => {
  //         setAllCharacterSheets([...props.characterSheets, data[0]])
  //     })
  // }

  //   function loadCharacter() {
  //     fetch(`/user-character/${props.allCharacterSheets.name}`)
  //       .then((result) => result.json)
  //       .then((data) => {
  //         setClickedCharacter(props.allCharactersheets.name);
  //         console.log(clickedCharacter, "currentsheet");
  //       });
  //   }

  return (
    <div className="loadcharacter">
      {props.allCharacterSheets.map((name) => {
        //console.log("sheets", name.ability_scores);
        return (
          <div style={{display:'inline-flex'}}>
          <div
          style={{backgroundColor:'rgb(150, 150, 150, 40%)', color:'black', borderRadius:'10px', userSelect:'none'}}
            onClick={() => {
              fetch(`http://localhost:8080/user-character/char/${name.name}`,{method:'GET'})
                .then(result => result.json())
                .then(data => {
                  data = data[0];
                  console.log('data',data)
                  props.setClickedCharacter({
                    userid: data.userid,
                    name: data.name,
                    class: data.class,
                    race: data.race,
                    subrace: data.subrace,
                    subclass: data.subclass,
                    personality_traits: data.personality_traits,
                    ideals: data.ideals,
                    bonds: data.bonds,
                    flaws: data.flaws,
                    background: data.background,
                    hit_dice: data.hit_dice,
                    speed: data.speed,
                    level: data.level,
                    experience: data.experience,
                    ability_scores: typeof data.ability_scores === 'object' ? data.ability_scores : JSON.parse(data.ability_scores),
                    saving_throws: typeof data.saving_throws === 'object' ? data.saving_throws : JSON.parse(data.saving_throws),
                    proficiencies: typeof data.proficiencies === 'object' ? data.proficiencies : JSON.parse(data.proficiencies),
                    other_profs_languages: data.other_profs_languages,
                    equipment: data.equipment,
                    inventory: data.inventory,
                    coins: typeof data.coins === 'object' ? data.coins : JSON.parse(data.coins),
                    spells: data.spells,
                    spell_slots:data.spell_slots,
                    feats: data.feats,
                    features_traits: typeof data.features_traits === 'object' ? data.feature_traits : data.features_traits,
                    backstory: data.backstory,
                    allies_organizations: data.allies_organizations,
                    notes: data.notes,
                    sprite: data.sprite,
                  });
                })
                .catch(error => console.log(error))
            }}
            
          >
            {name.name}
          </div>
            <DeleteCharacter name={name.name} updateCharSheets={props.updateCharSheets} setUpdateCharSheets={props.setUpdateCharSheets} clickedCharacter={props.clickedCharacter} />
       </div>
       );
      })}
    </div>
  );
};

export default Charactersheets;
