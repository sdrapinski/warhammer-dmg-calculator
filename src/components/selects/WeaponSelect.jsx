import React, { useState } from "react";

const WeaponSelect = ({ unitData, onChange }) => {
  const [selectValue, setselectValue] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      const output =
        unitData["MELEE WEAPONS"][e.target.value] ||
        unitData["RANGED WEAPONS"][e.target.value];
      setselectValue(e.target.value);
      onChange(output);
    }
  };

  const weapons = [];
  if (unitData) {
    const rangedWeapons = unitData["RANGED WEAPONS"] || {};
    const meleeWeapons = unitData["MELEE WEAPONS"] || {};

    Object.keys(rangedWeapons).forEach((weaponName, index) => {
      weapons.push({ index, name: weaponName, range: true });
    });

    Object.keys(meleeWeapons).forEach((weaponName, index) => {
      weapons.push({ index, name: weaponName, range: false });
    });
  }

  return (
    <div>
      <h3>Choose the weapon:</h3>
      <select value={selectValue} onChange={handleOnChange} name="weapon">
        <option value="" disabled>
          Choose the weapon
        </option>
        {weapons.map((weapon, index) => {
          return (
            <option key={index} value={weapon.name}>
              {weapon.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default WeaponSelect;
