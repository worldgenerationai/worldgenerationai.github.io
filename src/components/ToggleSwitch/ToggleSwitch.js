import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-label="Switch between dark and light mode"
      />
      <span className="slider round">
        <span className="emoji" aria-hidden="true">
          {isDark ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
