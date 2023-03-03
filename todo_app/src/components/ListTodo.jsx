import React from "react";

export default function ListTodo(props) {
  const listTodo = props.listTodo.map((item) => {
    return (
      <div
        key={item.id}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        {item.todo}
        <span
          className="delete"
          onClick={(e) => {
            props.removeTodo(item.id);
          }}
        >
          X
        </span>
      </div>
    );
  });
  return (
    <div className="list-todo">
      {listTodo}
    </div>
  );
}
