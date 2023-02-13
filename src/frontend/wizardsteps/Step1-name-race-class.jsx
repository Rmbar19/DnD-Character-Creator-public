import Select from 'react-select';
import { useEffect, useState } from 'react';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? 'red' : "blue",
      color: '#FFF',
      cursor: isDisabled ? 'not-allowed' : 'default',

    };
  },

};

export const Step1 = (props) => {
  const [selectedClassProficiencies, setSelectedClassProficiences] = useState([])
  const [selectedSubrace, setSelectedSubrace] = useState([])
  const [nextStep, setNextStep] = useState(false)
  const [numberChoices, setNumberChoices] = useState(0)
  const [update, setUpdate] = useState(true)
  const [selectedBackground, setSelectedBackground] = useState('')

  const handleChangeClass = e => {
    // setUpdate(!update)
    setNumberChoices(props.currentClass.proficiency_choices[0].choose)

    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedClassProficiences(selectedValues);
  }
  const handleChangeSubrace = e => {
    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedSubrace(selectedValues);
  }

  function updateBackground(e) {
    setSelectedBackground(e.target.value)
  }

  //////////USE EFFECT////////////
  useEffect(() => {
    if (props.currentClass !== '' && props.currentRace !== '' && props.characterSheet.name !== '' && selectedClassProficiencies.length === numberChoices && selectedBackground !== '') {
      setNextStep(true)
    } else {
      setNextStep(false)
    }
  }, [selectedClassProficiencies, selectedSubrace, update, props.characterSheet, numberChoices, props.currentClass, props.currentRace, selectedBackground])

  useEffect(() => {
    if (props.currentClass !== '') {
      setNumberChoices(props.currentClass.proficiency_choices[0].choose)
    }

  }, [props.currentClass, update])
  //////////USE EFFECT////////////

  return (
    <div className="wizard">

      <form>
        <div className="character-name">

          <div className="label">Enter your character name</div>
          <input onChange={(e) => {
            if (e.target.value === 'bob') {
              alert('BOB IS RETIRED!')
              e.target.value = '';
              return;
            }
            props.updateName(e)
            }} />
        </div>
        <div className="race-class-selection">
          <div className="character-race race-class">
            <div className='label'>Race</div>
            <Select styles={colourStyles} options={props.raceOptions} onChange={(e) => {
              props.updateRace(e)
            }} />
            {props.currentRace.name &&
              <select className="proficiency-select race" name="list-box" onChange={handleChangeSubrace} multiple >
                {props.currentRace.subraces.map((choice) => {
                  return <option value={choice.index}>{choice.name}</option>
                })}

              </select>
            }
            <div className="label">Background</div>
            <select className="proficiency-select race" name="list-box" onChange={(e) => {
              updateBackground(e)
              props.updateBackground(e.target.value)
            }} multiple >
              {props.backgrounds.map((choice) => {
                return <option value={choice.index}>{choice.name}</option>
              })}
            </select>
          </div>
          <div className="character-class race-class">
            <div className="label">Class</div>
            <Select styles={colourStyles} options={props.classOptions} onChange={(e) => {

              props.updateClass(e)
              setUpdate(!update)
            }} />
            {props.currentClass.name &&
              <select className="proficiency-select" name="list-box" onChange={(e) => {
                handleChangeClass(e)
              }}
                multiple>
                {props.currentClass.proficiency_choices[0].from.options.map((choice) => {
                  // console.log(choice.item.index)
                  return <option value={choice.item.index}>{choice.item.name}</option>
                })}
              </select>
            }
            <div>Select {numberChoices}</div>
          </div>
        </div>

      </form>
      <button className="wizard-button" onClick={props.toggleWizard}>Cancel</button>
      <button className="wizard-button" onClick={() => {
        props.updateProficienciesAndSubrace(selectedSubrace, selectedClassProficiencies, selectedBackground)
        props.nextStep()
      }} disabled={!nextStep}>next</button>
    </div>
  )
}

