import React, { useState } from "react";

const AttackingUnitForm = ({ weaponData }) => {
  const [unitCount, setUnitCount] = useState(1);
  const [attacks, setAttacks] = useState(4);
  const [ballisticSkill, setBallisticSkill] = useState(3);
  const [strength, setStrength] = useState(5);
  const [armorPiercing, setArmorPiercing] = useState(-1);
  const [damage, setDamage] = useState(1);
  const [lethalHits, setLethalHits] = useState(false);
  const [ignoresCover, setIgnoresCover] = useState(false);
  const [sustainedHits, setSustainedHits] = useState(false);
  const [extraAttacks, setExtraAttacks] = useState(false);
  const [devastatingWounds, setDevastatingWounds] = useState(false);
  const [sustainedHitsCount, setSustainedHitsCount] = useState(1); // Początkowa wartość dla SUSTAINED HITS

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Jeśli checkbox, wywołaj funkcję do obsługi zmiany dla pól typu checkbox
      handleCheckboxChange(name, checked);
    } else {
      // Jeśli inny input, wywołaj funkcję do obsługi zmiany dla pól typu input
      handleInputChangeForInput(name, value);
    }
  };

  const handleCheckboxChange = (name, checked) => {
    switch (name) {
      case "lethalHits":
        setLethalHits(checked);
        break;
      case "ignoresCover":
        setIgnoresCover(checked);
        break;
      case "sustainedHits":
        setSustainedHits(checked);
        break;
      case "extraAttacks":
        setExtraAttacks(checked);
        break;
      case "devastatingWounds":
        setDevastatingWounds(checked);
        break;
      default:
        break;
    }
  };
  const handleInputChangeForInput = (name, value) => {
    switch (name) {
      case "unitCount":
        setUnitCount(Number(value));
        break;
      case "attacks":
        setAttacks(Number(value));
        break;
      case "ballisticSkill":
        setBallisticSkill(Number(value));
        break;
      case "strength":
        setStrength(Number(value));
        break;
      case "armorPiercing":
        setArmorPiercing(Number(value));
        break;
      case "damage":
        setDamage(Number(value));
        break;
      case "sustainedHitsCount":
        setSustainedHitsCount(Number(value));
        break;
      default:
        break;
    }
  };

  // TUTAJ MOŻESZ DODAĆ LOGIKĘ DO OBLICZANIA OBRAŻEŃ NA PODSTAWIE WPISANYCH PARAMETRÓW

  return (
    <div>
      <h2>Parametry Jednostki atakującej</h2>
      <div>
        <label htmlFor="unitCount">Ilość jednostek w oddziale:</label>
        <input
          type="number"
          name="unitCount"
          value={unitCount}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="attacks">Ataki (A):</label>
        <input
          type="number"
          name="attacks"
          value={attacks}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="ballisticSkill">Balistick Skill (BS):</label>
        <input
          type="number"
          name="ballisticSkill"
          value={ballisticSkill}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="strength">Siła (S):</label>
        <input
          type="number"
          name="strength"
          value={strength}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="armorPiercing">Armor Piercing (AP):</label>
        <input
          type="number"
          name="armorPiercing"
          value={armorPiercing}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="damage">Damage (D):</label>
        <input
          type="number"
          name="damage"
          value={damage}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lethalHits">LETHAL HITS:</label>
        <input
          type="checkbox"
          name="lethalHits"
          checked={lethalHits}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="ignoresCover">IGNORES COVER:</label>
        <input
          type="checkbox"
          name="ignoresCover"
          checked={ignoresCover}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="sustainedHits">SUSTAINED HITS:</label>
        <input
          type="checkbox"
          name="sustainedHits"
          checked={sustainedHits}
          onChange={handleInputChange}
        />
        {/* Dodatkowy input, który będzie aktywny tylko gdy checkbox "SUSTAINED HITS" jest zaznaczony */}
        {sustainedHits && (
          <input
            type="number"
            name="sustainedHitsCount"
            value={sustainedHitsCount}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div>
        <label htmlFor="extraAttacks">EXTRA ATTACKS:</label>
        <input
          type="checkbox"
          name="extraAttacks"
          checked={extraAttacks}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="devastatingWounds">DEVASTATING WOUNDS:</label>
        <input
          type="checkbox"
          name="devastatingWounds"
          checked={devastatingWounds}
          onChange={handleInputChange}
        />
      </div>

      {/* TUTAJ MOŻESZ WYŚWIETLIĆ WYNIKI OBLICZEŃ */}
    </div>
  );
};

export default AttackingUnitForm;
