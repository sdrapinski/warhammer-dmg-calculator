import React from "react";

const DefendingUnitSelect = ({
  defendingUnits,
  selectedDefendingUnit,
  onChange,
}) => {
  return (
    <div className="defendingUnit_side">
      <h2>Parametry Jednostki broniącej</h2>
      <select
        value={selectedDefendingUnit}
        onChange={onChange}
        name="defendingUnit"
      >
        <option value="" disabled>
          Wybierz jednostkę broniącą
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
