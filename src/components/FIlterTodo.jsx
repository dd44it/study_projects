import React from "react";

export default function FilterTodo(props){
  const countActiveTask =
    props.filter === "completed"
      ? 0
      : (props.listTodo.length &&
          props.listTodo.filter((todo) => todo.done === false).length) ||
        0;
  return (
    <>
      <div className={`filter list-todo__item list-todo__item-${props.theme}`}>
        <span className="count-active-todo">items left {countActiveTask} </span>
        <div className="filter-button_wrapper">
          <button
            className={`filter-button ${props.filter === "all" && "active"}`}
            onClick={(e) => {
              props.filteredTask("all");
            }}
          >
            All
          </button>
          <button
            className={`filter-button ${props.filter === "active" && "active"}`}
            onClick={(e) => {
              props.filteredTask("active");
            }}
          >
            Acitve
          </button>
          <button
            className={`filter-button ${
              props.filter === "completed" && "active"
            }`}
            onClick={(e) => {
              props.filteredTask("completed");
            }}
          >
            Completed
          </button>
        </div>
        <button
          className="filter-button clear-btn"
          onClick={props.removeCompletedTask}
        >
          Clear Completed
        </button>
      </div>
      <div className={`filter-button_wrapper_mobile list-todo__item-${props.theme}`}>
        <button
          className={`filter-button ${props.filter === "all" && "active"}`}
          onClick={(e) => {
            props.filteredTask("all");
          }}
        >
          All
        </button>
        <button
          className={`filter-button ${props.filter === "active" && "active"}`}
          onClick={(e) => {
            props.filteredTask("active");
          }}
        >
          Acitve
        </button>
        <button
          className={`filter-button ${
            props.filter === "completed" && "active"
          }`}
          onClick={(e) => {
            props.filteredTask("completed");
          }}
        >
          Completed
        </button>
      </div>
    </>
  );
}