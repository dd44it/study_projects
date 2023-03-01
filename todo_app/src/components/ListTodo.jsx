import React from "react";
import { nanoid } from "nanoid";

export default function ListTodo(props) {
  const listTodo = props.listTodo.map((item) => {
    const id = nanoid();
    return (
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        {item}
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e, id);
          }}
        >
          X
        </span>
      </div>
    );
  });
  return (
    <div className="list-todo">
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        Jog around the park 3x
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e);
          }}
        >
          X
        </span>
      </div>
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        10 min meditation
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e);
          }}
        >
          X
        </span>
      </div>
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        Read for 1 hour
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e);
          }}
        >
          X
        </span>
      </div>
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        Pick up groceries
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e);
          }}
        >
          X
        </span>
      </div>
      <div
        key={nanoid()}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        Complete Todo App on Frontend Mentor
        <span
          className="delete"
          onClick={(e) => {
            removeTodo(e);
          }}
        >
          X
        </span>
      </div>
      {listTodo}
    </div>
  );
}
