import React from "react";

export default function InputTodo(props) {
  return (
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
  );
}
