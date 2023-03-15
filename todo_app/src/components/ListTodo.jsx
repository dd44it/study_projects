import React from "react";
import Checkbox from './Checkbox';

export default function ListTodo(props) {
  
  const listData = props.filter === "all"
  ? props.listTodo
  : props.filter === "active"
  ? props.listTodo.filter((todo) => todo.done === false)
  : props.listTodo.filter((todo) => todo.done === true)

  const listTodo = listData.map((item) => {
      const todoDone = item.done ? 'done' : 'undone'
      return (
        <div
          key={item.id}
          className={`list-todo__item list-todo__item-${props.theme}`}
        >
          <Checkbox
            done={item.done && true}
            handleChange={e => {props.done(item.id)}}
          />
          <span
            className={`todo__item todo-${todoDone}-${props.theme}`}
            onClick={(e) => {
              props.done(item.id);
            }}
          >
            {item.todo}
          </span>
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
