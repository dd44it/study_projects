import React from "react";
import Checkbox from './Checkbox';

export default function InputTodo(props) {
  return (
    <div className={`input-wrapper input-todo-${props.theme}`}>
      <Checkbox done={props.done} handleChange={props.handleChange} />

      <input
        type="text"
        className={`input-todo  input-todo-${props.theme}`}
        placeholder="Create a new todo..."
        name="todo"
        value={props.todo}
        onChange={(e) => {
          props.handleChange(e);
        }}
        onKeyPress={(e) => {
          props.keyPress(e);
        }}
      />
    </div>
  );
}
