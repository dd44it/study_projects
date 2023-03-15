import React from "react";

export default function Checkbox(props) {
  return (
    <div className="round">
      <input
        type="checkbox"
        className="todo-checkbox"
        name="done"
        checked={props.done && true}
        onChange={props.handleChange}
        
      />
      <label htmlFor=""></label>
    </div>
  );
}
