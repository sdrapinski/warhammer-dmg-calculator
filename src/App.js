import React, { useState } from "react";
import attackingUnitData from "./attacking_unit.json";
import DefendingUnitData from "./defending_unit.json";
import AttackingUnitSelect from "./components/selects/AttackingUnitSelect";
import DefendingUnitSelect from "./components/selects/DefendingUnitSelect";
import AttackingUnitForm from "./components/AttackingUnitForm";
import TargetUnitForm from "./components/TargetedUnitForm";

import "./styles/app.scss";

function App() {
  const [selectedAttackingUnit, setSelectedAttackingUnit] = useState("");
  const [selectedDefendingUnit, setSelectedDefendingUnit] = useState("");
  const [weapon, setWeapon] = useState();
  const [defendingUnitStats, setDefendingUnitStats] = useState("");

  const handleAttackingUnitChange = (e) => {
    const { value } = e.target;
    setSelectedAttackingUnit(value);

    // Przykładowe dane jednostki atakującej z wybranego pliku JSON
    const selectedUnitData = attackingUnitData[value] || {};
    setWeapon(selectedUnitData);
  };

  const handleDefendingUnitChange = (e) => {
    const { value } = e.target;
    setSelectedDefendingUnit(value);

    // Przykładowe dane jednostki broniącej z wybranego pliku JSON
    const selectedUnitData = DefendingUnitData[value] || {};
    setDefendingUnitStats(selectedUnitData);
  };

  return (
    <div className="main">
      <h1>Warhammer 40k 10th Edition Damage Calculator</h1>
      <div className="FormsWrapper">
        <div className="WeaponForm">
          <AttackingUnitSelect
            attackingUnits={attackingUnitData}
            selectedAttackingUnit={selectedAttackingUnit}
            onChange={handleAttackingUnitChange}
          />

          <AttackingUnitForm
            unitData={attackingUnitData[selectedAttackingUnit]}
            selectedWeaponIndex={weapon}
          />
        </div>
        <div className="TargetUnitForm">
          <DefendingUnitSelect
            defendingUnits={DefendingUnitData}
            selectedDefendingUnit={selectedDefendingUnit}
            onChange={handleDefendingUnitChange}
          />
          <TargetUnitForm defendingUnit={defendingUnitStats} />
        </div>
      </div>
    </div>
  );
}

export default App;
