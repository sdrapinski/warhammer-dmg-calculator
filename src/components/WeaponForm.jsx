import React, { useState } from "react";

const WeaponForm = () => {
  const [unitCount, setUnitCount] = useState(1);
  const [attacks, setAttacks] = useState(4);
  const [ballisticSkill, setBallisticSkill] = useState(3);
  const [strength, setStrength] = useState(5);
  const [armorPiercing, setArmorPiercing] = useState(-1);
  const [damage, setDamage] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

      {/* TUTAJ MOŻESZ WYŚWIETLIĆ WYNIKI OBLICZEŃ */}
    </div>
  );
};

export default WeaponForm;
