import React from "react";
import FilterTodo from "./FIlterTodo";

export default function ListTodo(props) {
  const listTodo = props.listTodo.map((item) => {
    const todoDone = item.done ? 'done' : 'undone'
    return (
      <div
        key={item.id}
        className={`list-todo__item list-todo__item-${props.theme}`}
      >
        <input type="checkbox" className="todo-checkbox" onChange={e => {props.done(item.id)} } checked={item.done && true} />
        <span className={`todo__item todo-${todoDone}-${props.theme}`}> {item.todo} </span>
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
      <FilterTodo
        theme={props.theme}
        listTodo={props.listTodo}
        removeCompletedTask={props.removeCompletedTask}
      />
    </div>
  );
}
