import React, { useEffect } from "react";

const AttackingUnitSelect = ({
  attackingUnits,
  selectedAttackingUnit,
  onChange,
}) => {
  useEffect(() => {
    Object.keys(attackingUnits).map((unitName, index) =>
      console.log(unitName, index)
    );

    return () => {};
  }, []);

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
        {Object.keys(attackingUnits).map((unitName, index) => (
          <option key={index} value={unitName}>
            {unitName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AttackingUnitSelect;
