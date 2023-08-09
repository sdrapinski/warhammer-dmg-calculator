import React from "react";

const AttackingUnitSelect = ({
  attackingUnits,
  selectedAttackingUnit,
  onChange,
}) => {
  return (
    <div className="attackingUnit_side">
      <h2>Attacking unit</h2>
      <select
        value={selectedAttackingUnit}
        onChange={onChange}
        name="attackingUnit"
      >
        <option value="" disabled>
          Wybierz jednostkę atakującą
        </option>
        {Object.keys(attackingUnits).map((unitName) => (
          <option key={unitName} value={unitName}>
            {unitName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AttackingUnitSelect;
