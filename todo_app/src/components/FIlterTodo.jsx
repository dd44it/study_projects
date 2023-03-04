import React from "react";

export default function FilterTodo(props){
  const countActiveTask = props.listTodo.length && props.listTodo.filter(todo => todo.done === false).length || 0
  return (
    <div className={`filter list-todo__item list-todo__item-${props.theme}`}>
      <span className="count-active-todo">items left {countActiveTask} </span>
      <div className="filter-button_wrapper">
        <button className="filter-button active">All</button>
        <button className="filter-button">Acitve</button>
        <button className="filter-button">Completed</button>
        <button
          className="filter-button clear-btn"
          onClick={props.removeCompletedTask}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}