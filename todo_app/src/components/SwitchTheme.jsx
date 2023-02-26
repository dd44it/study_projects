import React from "react";

export default function SwitchTheme(props) {
  return (
    <div>
      <div
        className={`switch-theme switch-theme-${props.theme}`}
        onClick={props.toggleTheme}
      ></div>
    </div>
  );
}
