import React from "react";
import SwitchTheme from "./SwitchTheme";

export default function Header(props) {
  return (
    <div className="header-todo">
      <h1 className="title-app">TODO</h1>
      <SwitchTheme theme={props.theme} toggleTheme={props.toggleTheme} />
    </div>
  );
}
