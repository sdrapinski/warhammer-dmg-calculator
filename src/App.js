import WeaponForm from "./components/WeaponForm";
import TargetUnitForm from "./components/TargetedUnitForm";

import "./styles/app.scss";

function App() {
  return (
    <div className="main">
      <h1>Warhammer 40k Damage Calculator</h1>
      <div className="FormsWrapper">
        <div className="WeaponForm">
          <WeaponForm />
        </div>
        <div className="TargetUnitForm">
          <TargetUnitForm />
        </div>
      </div>
    </div>
  );
}

export default App;
