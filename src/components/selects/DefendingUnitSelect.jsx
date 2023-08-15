import React from "react";

const DefendingUnitSelect = ({
  defendingUnits,
  selectedDefendingUnit,
  onChange,
}) => {
  return (
    <div className="defendingUnit_side">
      <h2>Defending unit </h2>
      <select
        value={selectedDefendingUnit}
        onChange={onChange}
        name="defendingUnit"
      >
        <option value="" disabled>
          Choose a unit
        </option>
        {Object.keys(defendingUnits).map((unitName) => (
          <option key={unitName} value={unitName}>
            {unitName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefendingUnitSelect;
