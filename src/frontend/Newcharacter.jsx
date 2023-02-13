import React, { useState, useEffect, useRef } from 'react';
import StepWizard from "react-step-wizard";
import { Step1 } from "./wizardsteps/Step1-name-race-class.jsx"
import { Step2 } from "./wizardsteps/Step2-proficiencies.jsx"
import "../frontend.css"
import "../newcharbutton.css"
  
  const urls = [
  `http://localhost:9999/races`,
  `http://localhost:9999/classes`,
  `http://localhost:9999/equipment`,
  `http://localhost:9999/subclasses`,
  `http://localhost:9999/subraces`,
  `http://localhost:9999/magic-items`,
  `http://localhost:9999/backgrounds`,
  `http://localhost:9999/feats`,
  `http://localhost:9999/features`,
  `http://localhost:9999/spells`,
  `http://localhost:9999/conditions`,
  `http://localhost:9999/damage-types`,
  `http://localhost:9999/proficiencies`,
  `http://localhost:9999/languages`
  ]

const  Newcharacter = (props) => {

    const [useWizard, setUseWizard] = useState(false)     
    
    const [raceOptions, setRaceOptions] = useState([])
    const [classOptions, setClassOptions] = useState([])
    const [currentClass, setCurrentClass] = useState('')
    const [currentRace, setCurrentRace] = useState('')
    const [currentBackground, setCurrentBackground] = useState('')
    const [currentCharactersheet, setCurrentCharactersheet] = useState(false)
    
    let raceSheet = useRef();
    let classSheet = useRef();

    let strSheet = useRef();
    let dexSheet = useRef();
    let intSheet = useRef();
    let wisSheet = useRef();
    let chaSheet = useRef();
    let conSheet = useRef();

    let strSavSheet = useRef();
    let dexSavSheet = useRef();
    let conSavSheet = useRef();
    let intSavSheet = useRef();
    let wisSavSheet = useRef();
    let chaSavSheet = useRef();

    let profAcrobatics = useRef();
    let profAnimalHandling = useRef();
    let profArcana = useRef();
    let profAthletics = useRef();
    let profDeception = useRef();
    let profHistory = useRef();
    let profInsight = useRef();
    let profIntimidation = useRef();
    let profInvestigation = useRef();
    let profMedicine = useRef();
    let profNature = useRef();
    let profPerception = useRef();
    let profPerformance = useRef();
    let profPersuasion = useRef();
    let profReligion = useRef();
    let profSleightOfHand = useRef();
    let profStealth = useRef();
    let profSurvival = useRef();

    let notes = useRef()
    let personalityTraits = useRef()
    let ideals = useRef()
    let bonds = useRef()
    let flaws = useRef()
    let features = useRef()

    let cp = useRef()
    let sp = useRef()
    let ep = useRef()
    let gp = useRef()
    let pp = useRef()
 
  ///////////////////////////////////////////////

  const [dndData, setDndData] = useState({})


  useEffect(() => {
    Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(data => {
      setDndData({
        races: data[0],
        classes: data[1],
        equipment:data[2],
        subclasses:data[3],
        subraces:data[4],
        magicItems:data[5],
        backgrounds:data[6] ,
        feats:data[7],
        features:data[8],
        spells:data[9],
        conditions:data[10],
        damageTypes:data[11],
        proficiencies:data[13],
      })
    })
  }, [])

  useEffect(() => {
    // var options = races[]
    //create an array with the name of every race
    if (dndData.races) {
      setRaceOptions(dndData.races.map((race) => {
        return { value: race.index, label: race.name }
      }))

    }

  }, [dndData.races])

  useEffect(() => {
    // var options = races[]
    //create an array with the name of every race
    if (dndData.classes) {
      setClassOptions(dndData.classes.map((dndclass) => {
        return { value: dndclass.index, label: dndclass.name }
      }))

    }

  }, [dndData.classes])

  useEffect( () => {

    if (currentCharactersheet) {
      strSheet.current.value = props.clickedCharacter.ability_scores.str;
      dexSheet.current.value = props.clickedCharacter.ability_scores.dex;
      conSheet.current.value = props.clickedCharacter.ability_scores.con;
      intSheet.current.value = props.clickedCharacter.ability_scores.int;
      wisSheet.current.value = props.clickedCharacter.ability_scores.wis;
      chaSheet.current.value = props.clickedCharacter.ability_scores.cha;

      classSheet.current.value = props.clickedCharacter.class;
      raceSheet.current.value = props.clickedCharacter.race;

      strSavSheet.current.value = props.clickedCharacter.saving_throws.str;
    dexSavSheet.current.value = props.clickedCharacter.saving_throws.dex;
    conSavSheet.current.value = props.clickedCharacter.saving_throws.con;
    intSavSheet.current.value = props.clickedCharacter.saving_throws.int;
    wisSavSheet.current.value = props.clickedCharacter.saving_throws.wis;
    chaSavSheet.current.value = props.clickedCharacter.saving_throws.cha;

     profAcrobatics.current.value = props.clickedCharacter.proficiencies.acrobatics;
     profAnimalHandling.current.value = props.clickedCharacter.proficiencies.animalHandling;
     profArcana.current.value = props.clickedCharacter.proficiencies.arcana;
     profAthletics.current.value = props.clickedCharacter.proficiencies.athletics;
     profDeception.current.value = props.clickedCharacter.proficiencies.deception;
     profHistory.current.value = props.clickedCharacter.proficiencies.history;
     profInsight.current.value = props.clickedCharacter.proficiencies.insight;
     profIntimidation.current.value = props.clickedCharacter.proficiencies.intimidation;
     profInvestigation.current.value = props.clickedCharacter.proficiencies.investigation;
     profMedicine.current.value = props.clickedCharacter.proficiencies.medicine;
     profNature.current.value = props.clickedCharacter.proficiencies.nature;
     profPerception.current.value = props.clickedCharacter.proficiencies.perception;
     profPerformance.current.value = props.clickedCharacter.proficiencies.performance;
     profPersuasion.current.value = props.clickedCharacter.proficiencies.persuasion;
     profReligion.current.value = props.clickedCharacter.proficiencies.religion;
     profSleightOfHand.current.value = props.clickedCharacter.proficiencies.sleightOfHand;
     profStealth.current.value = props.clickedCharacter.proficiencies.stealth;
     profSurvival.current.value = props.clickedCharacter.proficiencies.survival;

     notes.current.value = props.clickedCharacter.notes.notes
     personalityTraits.current.value = props.clickedCharacter.personality_traits
     ideals.current.value = props.clickedCharacter.ideals
     bonds.current.value = props.clickedCharacter.bonds
     flaws.current.value = props.clickedCharacter.flaws
     features.current.value = props.clickedCharacter.features_traits.feature

     cp.current.value = props.clickedCharacter.coins.cp
     sp.current.value = props.clickedCharacter.coins.sp
     ep.current.value = props.clickedCharacter.coins.ep
     gp.current.value = props.clickedCharacter.coins.gp
     pp.current.value = props.clickedCharacter.coins.pp

     props.createCharacterSheet(props.clickedCharacter)

      if (typeof props.clickedCharacter.other_profs_languages !== 'string') {
        notes.current.value = ('Proficiencies/Languages' + props.clickedCharacter.other_profs_languages.map(e => e.replace(',', '') + '\n'))
      } else {
        notes.current.value = props.clickedCharacter.other_profs_languages;
      }

      if (typeof props.clickedCharacter.features_traits !== 'string') {
        features.current.value = (props.clickedCharacter.features_traits.map(e => e.replace(',', '') + '\n'))
      } else {
        features.current.value = props.clickedCharacter.features_traits
      }

    }

  },[currentCharactersheet])

  useEffect(() => {
    //console.log('clicked')
    if (props.clickedCharacter !== '') {
      //console.log('clicked char',props.clickedCharacter)
      if (!useWizard) {

        setCurrentCharactersheet(true)
      }
    }

    //console.log('clicked', props.clickedCharacter)

  }, [props.clickedCharacter])

  function toggleWizard() {
    props.setClickedCharacter({
      userid:'',
      name:'name',
      class:'class',
      race:'race',
      subrace:'subrace',
      subclass:'Insert character details', 
      personality_traits:'Insert character details',
      ideals:'Insert character details',
      bonds:'Insert character details',
      flaws:'Insert character details',
      background:'',
      hit_dice:'',
      speed:'',
      level:'',
      experience:'',
      ability_scores:{str:'8',dex:'8',con:'8',int:'8',wis:'8',cha:'8'},
      saving_throws:{str:'',dex:'',con:'',int:'',wis:'',cha:''},
      proficiencies:{acrobatics:'',animalHandling:'',arcana:'',athletics:'',deception:'',history:'',insight:'',intimidation:'',investigation:'',medicine:'',nature:'',perception:'',performance:'',persuasion:'',religion:'',sleightOfHand:'',stealth:'',survival:''},
      other_profs_languages:['dummy version'],
      equipment:'',
      inventory:'',
      coins:{cp:0, sp:0, ep:0, gp:0, pp:0},
      spells:'',
      spell_slots:'0xcantrip,0x1st,0x2nd,0x3rd,0x4th,0x5th,0x6th,0x7th,0x8th,0x9th',
      feats:'',
      features_traits:['dummy features'],
      backstory:'Insert character details',
      allies_organizations:'Insert character details',
      notes:'Insert character details',
      sprite:''
      })
      setCurrentClass('')
      setCurrentRace('')
      setCurrentBackground('')
    setUseWizard(!useWizard)
  }


  function updateName(name) {
    // setCharacterName(name.target.value)
    props.setClickedCharacter({
      ...props.clickedCharacter,
      name: name.target.value
    })

  }

     function updateClass(dndclass) {
      if (dndclass.value) {
        props.setClickedCharacter({
          ...props.clickedCharacter,
          class:dndclass.value
        })
          setCurrentClass(dndData.classes.find(currentClass => currentClass.index === dndclass.value))
        } else {
          props.setClickedCharacter({
            ...props.clickedCharacter,
            class:dndclass.target.value
          })        
      }
     }

     function updateRace(race) {
      props.setClickedCharacter({
        ...props.clickedCharacter,
        race:race.value
      })
      if (race.value) {
        props.setClickedCharacter({
          ...props.clickedCharacter,
          race:race.value
        })
          setCurrentRace(dndData.races.find(currentRace => currentRace.index === race.value))
        } else {
          props.setClickedCharacter({
            ...props.clickedCharacter,
            race:race.target.value
          })   
    }
  }     
 
    function updateProficienciesAndSubrace(subrace, proficiencies, background) {
      props.setClickedCharacter({
        ...props.clickedCharacter,
        subrace: subrace,
        other_profs_languages: proficiencies,
        background:background
      })
    }

    function updateAttributes(attributes) {

      // strSheet.current.value = attributes.str;
      // dexSheet.current.value = attributes.dex;
      // conSheet.current.value = attributes.con;
      // intSheet.current.value = attributes.int;
      // wisSheet.current.value = attributes.wis;
      // chaSheet.current.value = attributes.cha;

      props.setClickedCharacter({
        ...props.clickedCharacter,
        ability_scores: {
          str: attributes.str,
          dex: attributes.dex,
          con: attributes.con,
          int: attributes.int,
          wis: attributes.wis,
          cha: attributes.cha,
        }
      })
    }

    function finishCharacterSheet() {

      let ability_bonuses = currentRace.ability_bonuses;
      let ability_scores = {...props.clickedCharacter.ability_scores};
      ability_bonuses.forEach(bonus => {
        ability_scores[bonus.ability_score.index] += bonus.bonus

      })
      setCurrentCharactersheet(true)
      props.setClickedCharacter({
        ...props.clickedCharacter,
        equipment:[...currentBackground.starting_equipment.map(x => x.equipment.name), ...currentBackground.starting_equipment_options.map(x => x.from.equipment_category.name), ...currentClass.starting_equipment.map(x => x.equipment.name), ...currentClass.starting_equipment_options.map(x => x.desc)],
        feats:[],
        notes:[...props.clickedCharacter.other_profs_languages, ...currentRace.languages.map(x => x.name), ...currentBackground.starting_proficiencies.map(x => x.name), ...currentRace.starting_proficiencies.map(x => x.name), ...currentClass.proficiencies.map(x => x.name)],
        features_traits:[...currentRace.traits.map(x => x.name), currentBackground.feature.name],
        hit_dice:currentClass.hit_die,
        inventory:[],
        level:1,
        speed:currentRace.speed,
        ability_scores:ability_scores,
        spells:[],
        userid:props.userId
      })
      
      setCurrentCharactersheet(true)
    }

    function updateBackground(newBackground) {
      setCurrentBackground(dndData.backgrounds.filter(x => x.name.toLowerCase() === newBackground.toLowerCase())[0])
    }


    function updateSheetAbilityScores() {

        props.setClickedCharacter({
          ...props.clickedCharacter,
          ability_scores:{
            ...props.clickedCharacter.ability_scores,
            str:strSheet.current.value,
            dex:dexSheet.current.value,
            con:conSheet.current.value,
            int:intSheet.current.value,
            wis:wisSheet.current.value,
            cha:chaSheet.current.value
          }
        })
    } 

    function updateSheetSavingThrows() {
      props.setClickedCharacter({
        ...props.clickedCharacter,
        saving_throws:{
          ...props.clickedCharacter.saving_throws,
          str:strSavSheet.current.value,
          dex:dexSavSheet.current.value,
          con:conSavSheet.current.value,
          int:intSavSheet.current.value,
          wis:wisSavSheet.current.value,
          cha:chaSavSheet.current.value
        }
      })
  } 

  function updateSheetProficiencies() {
    props.setClickedCharacter({
      ...props.clickedCharacter,
      proficiencies:{
        ...props.clickedCharacter.proficiencies,
        acrobatics:profAcrobatics.current.value,
        animalHandling:profAnimalHandling.current.value,
        arcana:profArcana.current.value,
        athletics:profAthletics.current.value,
        deception:profDeception.current.value,
        history:profHistory.current.value,
        insight:profInsight.current.value,
        intimidation:profIntimidation.current.value,
        investigation:profInvestigation.current.value,
        medicine:profMedicine.current.value,
        nature:profNature.current.value,
        perception:profPerception.current.value,
        performance:profPerformance.current.value,
        persuasion:profPersuasion.current.value,
        religion:profReligion.current.value,
        sleightOfHand:profSleightOfHand.current.value,
        stealth:profStealth.current.value,
        survival:profSurvival.current.value
      }
    })
} 

function updateSheetNotes() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    notes:notes.current.value
  })
} 

function updateSheetpersonalityTraits() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    personality_traits:personalityTraits.current.value
  })
} 

function updateSheetIdeals() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    ideals:ideals.current.value
  })
} 

function updateSheetBonds() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    bonds:bonds.current.value
  })
}

function updateSheetFlaws() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    flaws:flaws.current.value
  })
}

function updateSheetFeatures() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    features_traits:features.current.value
  })
}

function updateCoins() {
  props.setClickedCharacter({
    ...props.clickedCharacter,
    coins: {
      cp:cp.current.value,
      sp:sp.current.value,
      ep:ep.current.value,
      gp:gp.current.value,
      pp:pp.current.value
    }
  })
}

return (
    <>
    {currentCharactersheet && (
      <div className='characterSheet'>

      <input className='charactersheetInput mainInfo' value={props.clickedCharacter.name}  style={{left:'6vw', top:'1vw', width:'8vw', height:'1.95vw'}} readOnly/>
      <input className='charactersheetInput mainInfo' onChange={(e) => {updateClass(e)}} ref={classSheet}  value={props.clickedCharacter.class} style={{left:'6vw', top:'3.15vw', width:'8vw', height:'1.95vw'}}/>
      <input className='charactersheetInput mainInfo' onChange={(e) => {updateRace(e)}} ref={raceSheet}  value={props.clickedCharacter.race} style={{left:'6vw', top:'5.2vw', width:'8vw', height:'1.95vw'}}/>

      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={strSheet}  style={{left:'1vw', top:'11vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>
      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={dexSheet}  style={{left:'1vw', top:'16.5vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>
      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={conSheet}  style={{left:'1vw', top:'22vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>
      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={intSheet}  style={{left:'1vw', top:'27.5vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>
      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={wisSheet}  style={{left:'1vw', top:'32.7vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>
      <input className='charactersheetInput abilityInput' onChange={updateSheetAbilityScores} ref={chaSheet}  style={{left:'1vw', top:'38.5vw', width:'3.2vw', height:'3vw', fontSize:'2.5vw', textAlign:'center'}}/>

      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={strSavSheet}  style={{left:'6.8vw', top:'11.24vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={dexSavSheet}  style={{left:'6.8vw', top:'12.2vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={conSavSheet}  style={{left:'6.8vw', top:'13.32vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={intSavSheet}  style={{left:'6.8vw', top:'14.54vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={wisSavSheet}  style={{left:'6.8vw', top:'15.55vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput savingThrows' onChange={updateSheetSavingThrows} ref={chaSavSheet}  style={{left:'6.8vw', top:'16.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>

      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profAcrobatics}       style={{left:'6.8vw', top:'19.8vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profAnimalHandling}   style={{left:'6.8vw', top:'20.8vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profArcana}           style={{left:'6.8vw', top:'21.96vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profAthletics}        style={{left:'6.8vw', top:'23.2vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profDeception}        style={{left:'6.8vw', top:'24.3vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profHistory}          style={{left:'6.8vw', top:'25.4vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profInsight}          style={{left:'6.8vw', top:'26.4vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profIntimidation}     style={{left:'6.8vw', top:'27.5vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profInvestigation}    style={{left:'6.8vw', top:'28.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profMedicine}         style={{left:'6.8vw', top:'29.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profNature}           style={{left:'6.8vw', top:'30.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profPerception}       style={{left:'6.8vw', top:'31.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profPerformance}      style={{left:'6.8vw', top:'32.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profPersuasion}       style={{left:'6.8vw', top:'33.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profReligion}         style={{left:'6.8vw', top:'34.6vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profSleightOfHand}    style={{left:'6.8vw', top:'35.7vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profStealth}          style={{left:'6.8vw', top:'36.8vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      <input className='charactersheetInput proficiencies' onChange={updateSheetProficiencies} ref={profSurvival}         style={{left:'6.8vw', top:'37.8vw', width:'1.5vw', height:'1vw', fontSize:'1vw', textAlign:'center'}}/>
      
      <textarea className='charactersheetInput notes' onChange={updateSheetNotes} ref={notes} style={{left:'17vw', top:'39.5vw', width:'9.7vw', height:'8vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>

      <textarea className='charactersheetInput personalityTraits' onChange={updateSheetpersonalityTraits} ref={personalityTraits} style={{left:'28vw', top:'1.5vw', width:'11.5vw', height:'3.2vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>
      <textarea className='charactersheetInput personalityTraits' onChange={updateSheetIdeals} ref={ideals} style={{left:'28vw', top:'6vw', width:'11.5vw', height:'3.2vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>
      <textarea className='charactersheetInput personalityTraits' onChange={updateSheetBonds} ref={bonds} style={{left:'28vw', top:'11vw', width:'11.5vw', height:'3.2vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>
      <textarea className='charactersheetInput personalityTraits' onChange={updateSheetFlaws} ref={flaws} style={{left:'28vw', top:'15.5vw', width:'11.5vw', height:'3.2vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>
      <textarea className='charactersheetInput personalityTraits' onChange={updateSheetFeatures} ref={features} style={{left:'28vw', top:'20.5vw', width:'11.5vw', height:'8.4vw', fontSize:'.75vw', textAlign:'center', display:'inline-flex', flexWrap:'wrap'}}/>

      <input className='charactersheetInput coins' onChange={updateCoins} ref={cp} style={{left:'33vw', top:'31.4vw', width:'6vw', height:'1vw', fontSize:'1vw', textAlign:'left'}}/>
      <input className='charactersheetInput coins' onChange={updateCoins} ref={sp} style={{left:'33vw', top:'33.4vw', width:'6vw', height:'1vw', fontSize:'1vw', textAlign:'left'}}/>
      <input className='charactersheetInput coins' onChange={updateCoins} ref={ep} style={{left:'33vw', top:'35.5vw', width:'6vw', height:'1vw', fontSize:'1vw', textAlign:'left'}}/>
      <input className='charactersheetInput coins' onChange={updateCoins} ref={gp} style={{left:'33vw', top:'37.7vw', width:'6vw', height:'1vw', fontSize:'1vw', textAlign:'left'}}/>
      <input className='charactersheetInput coins' onChange={updateCoins} ref={pp} style={{left:'33vw', top:'39.7vw', width:'6vw', height:'1vw', fontSize:'1vw', textAlign:'left'}}/>

      <button className='exit' onClick={() => {setCurrentCharactersheet(false)}} style={{position:"absolute", left:'0vw', top:'48.4vw', height:'1.5vw', width:'2.4vw'}}>Exit</button>
      <button onClick={() => {
       // console.log(props.clickedCharacter)
        
        props.currentCharactersheet(props.clickedCharacter)
      }
    }
    style={{position:"absolute", left:'37.5vw', top:'48.4vw', height:'1.5vw', width:'2.4vw'}}
      >Save</button>
      </div>
    )}
          {useWizard && 
                     <StepWizard >
                     <Step1 backgrounds={dndData.backgrounds} updateProficienciesAndSubrace={updateProficienciesAndSubrace} toggleWizard={toggleWizard} characterSheet={props.clickedCharacter} raceOptions={raceOptions} classOptions={classOptions} updateName={updateName} updateClass={updateClass} updateRace={updateRace} currentClass={currentClass} currentRace={currentRace} updateBackground={updateBackground} />
                     <Step2  updateAttributes={updateAttributes} toggleWizard={toggleWizard} finishCharacterSheet={finishCharacterSheet}/>
                   </StepWizard> 
          }

      <button className="newcharbutton" disabled={useWizard} onClick={toggleWizard}>New<br /> Character</button>
      



    </>
  );
}

export default Newcharacter;