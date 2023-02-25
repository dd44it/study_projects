import React from "react";
import SwitchTheme from "./SwitchTheme";

export default function Header() {
  return (
    <div className="header-todo">
      <h1 className="title-app">TODO</h1>
      <SwitchTheme />
    </div>
  );
}
