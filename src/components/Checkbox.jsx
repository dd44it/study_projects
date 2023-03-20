import React from "react";
import { nanoid } from "nanoid";


export default function Checkbox(props) {
  const idCheckbox = nanoid()
  return (
    <div className="round">
      <input
        type="checkbox"
        className="todo-checkbox"
        name="done"
        checked={props.done && true}
        onChange={props.handleChange}
        id={idCheckbox}
      />
      <label htmlFor={idCheckbox}></label>
    </div>
  );
}
