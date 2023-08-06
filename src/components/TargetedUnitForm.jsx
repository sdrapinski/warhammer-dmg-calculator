import React, { useState } from "react";

const TargetUnitForm = ({ defendingUnit }) => {
  const [targetToughness, setTargetToughness] = useState(8);
  const [targetSave, setTargetSave] = useState(2);
  const [targetWounds, setTargetWounds] = useState(8);
  const [targetInvulnerableSave, setTargetInvulnerableSave] = useState(4);
  const [stealth, setStealth] = useState(false);
  const [benefitOfCover, setBenefitOfCover] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      handleCheckboxChange(name, checked);
    } else {
      handleInputChangeForInput(name, value);
    }
  };

  const handleCheckboxChange = (name, checked) => {
    switch (name) {
      case "Stealth":
        setStealth(checked);
        break;
      case "BOC":
        setBenefitOfCover(checked);
        break;
      default:
        break;
    }
  };

  const handleInputChangeForInput = (name, value) => {
    switch (name) {
      case "targetToughness":
        setTargetToughness(Number(value));
        break;
      case "targetSave":
        setTargetSave(Number(value));
        break;
      case "targetWounds":
        setTargetWounds(Number(value));
        break;
      case "targetInvulnerableSave":
        setTargetInvulnerableSave(Number(value));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Parametry Jednostki broniącej</h2>
      <div>
        <label htmlFor="targetToughness">Toughness (T) celu:</label>
        <input
          type="number"
          name="targetToughness"
          value={targetToughness}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="targetSave">Save (Sv) celu:</label>
        <input
          type="number"
          name="targetSave"
          value={targetSave}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="targetWounds">Wounds (W) celu:</label>
        <input
          type="number"
          name="targetWounds"
          value={targetWounds}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="targetInvulnerableSave">
          Invulnerable Save (Inv) celu:
        </label>
        <input
          type="number"
          name="targetInvulnerableSave"
          value={targetInvulnerableSave}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="Stealth">Stealth</label>
        <input
          type="checkbox"
          name="Stealth"
          checked={stealth}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="BOC">Benefit of Cover</label>
        <input
          type="checkbox"
          name="BOC"
          checked={benefitOfCover}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default TargetUnitForm;
