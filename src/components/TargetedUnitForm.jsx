import React from "react";

const TargetUnitForm = ({ onChange }) => {
  return (
    <div>
      <h2>Parametry Jednostki broniącej</h2>
      <div>
        <label htmlFor="targetToughness">Toughness (T) celu:</label>
        <input type="number" name="targetToughness" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="targetSave">Save (Sv) celu:</label>
        <input type="number" name="targetSave" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="targetWounds">Wounds (W) celu:</label>
        <input type="number" name="targetWounds" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="targetInvulnerableSave">
          Invulnerable Save (Inv) celu:
        </label>
        <input
          type="number"
          name="targetInvulnerableSave"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TargetUnitForm;
