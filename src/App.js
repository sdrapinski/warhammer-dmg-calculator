import React, { useState } from "react";
import attackingUnitData from "./attacking_unit.json";
import DefendingUnitData from "./defending_unit.json";
import AttackingUnitForm from "./components/AttackingUnitForm";
import TargetUnitForm from "./components/TargetedUnitForm";

import "./styles/app.scss";

function App() {
  const [attackingUnitName, setSelectedAttackingUnitName] = useState("");
  const [weapon, setWeapon] = useState();
  const [defendingUnitName, setdefendingUnitName] = useState("");
  const [defendingUnitStats, setdefendingUnitStats] = useState("");

  const handleAttackingUnitChange = (e) => {
    const { value } = e.target;
    setSelectedAttackingUnitName(value);

    // Przykładowe dane jednostki atakującej z wybranego pliku JSON
    const selectedUnitData = attackingUnitData[value] || {};
    setWeapon(selectedUnitData);
  };

  const handleDefendingUnitChange = (e) => {
    const { value } = e.target;
    setdefendingUnitName(value);

    // Przykładowe dane jednostki broniącej z wybranego pliku JSON
    const selectedUnitData = DefendingUnitData[value] || {};
    setdefendingUnitStats(selectedUnitData);
  };

  return (
    <div className="main">
      <h1>Warhammer 40k 10th Edition Damage Calculator</h1>
      <div className="FormsWrapper">
        {/* Lista rozwijana dla jednostki atakującej */}
        <div className="attackingUnit_side">
          <h2>Attacking unit</h2>
          <select
            value={attackingUnitName}
            onChange={handleAttackingUnitChange}
            name="attackingUnit"
          >
            <option value="" disabled>
              Wybierz jednostkę atakującą
            </option>
            {Object.keys(attackingUnitData).map((unitName) => (
              <option key={unitName} value={unitName}>
                {unitName}
              </option>
            ))}
          </select>
          <div className="WeaponForm">
            <AttackingUnitForm weaponData={weapon} />
          </div>
        </div>
        <div className="defendingUnit_side">
          {/* Lista rozwijana dla jednostki broniącej */}
          <h2>Parametry Jednostki broniącej</h2>
          <select
            value={defendingUnitName}
            onChange={handleDefendingUnitChange}
            name="defendingUnit"
          >
            <option value="" disabled>
              Wybierz jednostkę broniącą
            </option>
            {Object.keys(DefendingUnitData).map((unitName) => (
              <option key={unitName} value={unitName}>
                {unitName}
              </option>
            ))}
          </select>
          <div className="TargetUnitForm">
            <TargetUnitForm defendingUnit={defendingUnitStats} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
