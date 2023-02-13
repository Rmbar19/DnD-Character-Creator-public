import { useEffect, useState } from "react";

export const Step2 = (props) => {
  const [totalPoints, setTotalPoints] = useState(27);
  const [strength, setStrength] = useState(8);
  const [dexterity, setDexterity] = useState(8);
  const [constitution, setConstitution] = useState(8);
  const [intelligence, setIntelligence] = useState(8);
  const [wisdom, setWisdom] = useState(8);
  const [charisma, setCharisma] = useState(8);

  useEffect(() => {

    props.updateAttributes({
      str:strength,
      dex:dexterity,
      con:constitution,
      int:intelligence,
      wis:wisdom,
      cha:charisma,
  });

  }, [strength, dexterity, constitution, wisdom, intelligence, charisma])

  function updateStrength(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (strength > 13) {
      if (strength < 15 && add && totalPoints > 1) {
        setStrength(strength + 1);
        setTotalPoints(totalPoints - 2);
      } else if (strength > 8 && !add) {
        setStrength(strength - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (strength > 12) {
      if (strength < 15 && add && totalPoints > 1) {
        setStrength(strength + 1);
        setTotalPoints(totalPoints - 2);
      } else if (strength > 8 && !add) {
        setStrength(strength - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (strength < 15 && add && totalPoints > 0) {
        setStrength(strength + 1);
        setTotalPoints(totalPoints - 1);
      } else if (strength > 8 && !add) {
        setStrength(strength - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  function updateDexterity(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (dexterity > 13) {
      if (dexterity < 15 && add && totalPoints > 1) {
        setDexterity(dexterity + 1);
        setTotalPoints(totalPoints - 2);
      } else if (dexterity > 8 && !add) {
        setDexterity(dexterity - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (dexterity > 12) {
      if (dexterity < 15 && add && totalPoints > 1) {
        setDexterity(dexterity + 1);
        setTotalPoints(totalPoints - 2);
      } else if (dexterity > 8 && !add) {
        setDexterity(dexterity - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (dexterity < 15 && add && totalPoints > 0) {
        setDexterity(dexterity + 1);
        setTotalPoints(totalPoints - 1);
      } else if (dexterity > 8 && !add) {
        setDexterity(dexterity - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  function updateConstitution(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (constitution > 13) {
      if (constitution < 15 && add && totalPoints > 1) {
        setConstitution(constitution + 1);
        setTotalPoints(totalPoints - 2);
      } else if (constitution > 8 && !add) {
        setConstitution(constitution - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (constitution > 12) {
      if (constitution < 15 && add && totalPoints > 1) {
        setConstitution(constitution + 1);
        setTotalPoints(totalPoints - 2);
      } else if (constitution > 8 && !add) {
        setConstitution(constitution - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (constitution < 15 && add && totalPoints > 0) {
        setConstitution(constitution + 1);
        setTotalPoints(totalPoints - 1);
      } else if (constitution > 8 && !add) {
        setConstitution(constitution - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  function updateIntelligence(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (intelligence > 13) {
      if (intelligence < 15 && add && totalPoints > 1) {
        setIntelligence(intelligence + 1);
        setTotalPoints(totalPoints - 2);
      } else if (intelligence > 8 && !add) {
        setIntelligence(intelligence - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (intelligence > 12) {
      if (intelligence < 15 && add && totalPoints > 1) {
        setIntelligence(intelligence + 1);
        setTotalPoints(totalPoints - 2);
      } else if (intelligence > 8 && !add) {
        setIntelligence(intelligence - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (intelligence < 15 && add && totalPoints > 0) {
        setIntelligence(intelligence + 1);
        setTotalPoints(totalPoints - 1);
      } else if (intelligence > 8 && !add) {
        setIntelligence(intelligence - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  function updateWisdom(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (wisdom > 13) {
      if (wisdom < 15 && add && totalPoints > 1) {
        setWisdom(wisdom + 1);
        setTotalPoints(totalPoints - 2);
      } else if (wisdom > 8 && !add) {
        setWisdom(wisdom - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (wisdom > 12) {
      if (wisdom < 15 && add && totalPoints > 1) {
        setWisdom(wisdom + 1);
        setTotalPoints(totalPoints - 2);
      } else if (wisdom > 8 && !add) {
        setWisdom(wisdom - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (wisdom < 15 && add && totalPoints > 0) {
        setWisdom(wisdom + 1);
        setTotalPoints(totalPoints - 1);
      } else if (wisdom > 8 && !add) {
        setWisdom(wisdom - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  function updateCharisma(e) {
    //can't go below 8/above 15

    let add = e.target.textContent === "+";

    if (charisma > 13) {
      if (charisma < 15 && add && totalPoints > 1) {
        setCharisma(charisma + 1);
        setTotalPoints(totalPoints - 2);
      } else if (charisma > 8 && !add) {
        setCharisma(charisma - 1);
        setTotalPoints(totalPoints + 2);
      }
    } else if (charisma > 12) {
      if (charisma < 15 && add && totalPoints > 1) {
        setCharisma(charisma + 1);
        setTotalPoints(totalPoints - 2);
      } else if (charisma > 8 && !add) {
        setCharisma(charisma - 1);
        setTotalPoints(totalPoints + 1);
      }
    } else {
      if (charisma < 15 && add && totalPoints > 0) {
        setCharisma(charisma + 1);
        setTotalPoints(totalPoints - 1);
      } else if (charisma > 8 && !add) {
        setCharisma(charisma - 1);
        setTotalPoints(totalPoints + 1);
      }
    }
  }

  return (
    <div className="wizard">
      <div className="character-name">
        <div className="label">Choose your point buy in</div>
      </div>
      <div className="ability-point-selection">
        <div className="character-race race-class">
          <div>
            <div className="label">Ability</div>
            <div className="ability-scores" style={{ display: "inline-flex" }}>
              <div className="ability-name" style={{ marginRight: ".5vw" }}>
                <div>Strength: </div>
                <div>Dexterity: </div>
                <div>Constitution: </div>
                <div>Intelligence: </div>
                <div>Wisdom: </div>
                <div>Charisma: </div>
              </div>
              <div className="scores">
                <div className="ability">
                  <div
                    onClick={updateStrength}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{strength}</div>
                  <div
                    onClick={updateStrength}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
                <div className="ability">
                  <div
                    onClick={updateDexterity}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{dexterity}</div>
                  <div
                    onClick={updateDexterity}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
                <div className="ability">
                  <div
                    onClick={updateConstitution}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{constitution}</div>
                  <div
                    onClick={updateConstitution}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
                <div className="ability">
                  <div
                    onClick={updateIntelligence}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{intelligence}</div>
                  <div
                    onClick={updateIntelligence}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
                <div className="ability">
                  <div
                    onClick={updateWisdom}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{wisdom}</div>
                  <div
                    onClick={updateWisdom}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
                <div className="ability">
                  <div
                    onClick={updateCharisma}
                    style={{ paddingRight: ".25vw", userSelect: "none" }}
                  >
                    -
                  </div>
                  <div className="ability-label">{charisma}</div>
                  <div
                    onClick={updateCharisma}
                    style={{ paddingLeft: ".25vw", userSelect: "none" }}
                  >
                    +
                  </div>
                </div>
              </div>

              <div className="point-buy"></div>

              <div className="label">Pool: {totalPoints}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="wizard-button" onClick={props.toggleWizard}>
        Cancel
      </button>
      <button onClick={props.previousStep}>Previous</button>
      <button
        className="wizard-button"
        onClick={() => {
          props.toggleWizard();
          props.finishCharacterSheet()
        }}
        disabled={totalPoints !== 0}
      >
        Finish
      </button>
    </div>
  );
};
