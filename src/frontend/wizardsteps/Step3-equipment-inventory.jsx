import React from 'react'

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "black";
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : "blue",
        color: '#FFF',
        cursor: isDisabled ? 'not-allowed' : 'default',
  
      };
    },
  //equipment, inventory, backpack, frontpack, etc.
  };
const Step3 = () => {
    return (
        <div className="wizard">
    
          <form>
            <div className="character-name">
    
              <div className="label">Enter your character name</div>
              <input onChange={props.updateName} />
            </div>
            <div className="race-class-selection">
              <div className="character-race race-class">
                <div className='label'>Race</div>
                <Select styles={colourStyles} options={props.raceOptions} onChange={props.updateRace} />
                {props.currentRace.name &&
        <select className="proficiency-select" name="list-box" multiple >
          {props.currentRace.subraces.map((choice) => {
            return <option value={choice.index}>{choice.name}</option>
          })}
    
    </select>
                }
    
    <div>Select 1</div>
                
    
              </div>
              <div className="character-class race-class">
                <div className="label">Class</div>
                <Select styles={colourStyles} options={props.classOptions} onChange={props.updateClass} />
                {props.currentClass.name &&
                  <select className="proficiency-select" name="list-box" onChange={handleChangeClass} multiple>
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
            props.updateProficienciesAndSubrace(selectedSubrace, selectedClassProficiencies)
            props.nextStep()
          }} disabled={!nextStep}>next</button>
        </div>
      )
}

export default Step3
