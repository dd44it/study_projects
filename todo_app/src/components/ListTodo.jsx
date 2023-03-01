import React from "react";

export default function ListTodo(props){
  const listTodo = props.listTodo.map(item => {
    return <div className={`list-todo__item list-todo__item-${props.theme}`}> {item} </div> 
  })
  return (
    <div className="list-todo">
      <div className={`list-todo__item list-todo__item-${props.theme}`}> Jog around the park 3x </div>
      <div className={`list-todo__item list-todo__item-${props.theme}`}>10 min meditation</div>
      <div className={`list-todo__item list-todo__item-${props.theme}`}>Read for 1 hour</div>
      <div className={`list-todo__item list-todo__item-${props.theme}`}>Pick up groceries</div>
      <div className={`list-todo__item list-todo__item-${props.theme}`}>Complete Todo App on Frontend Mentor</div>
      {listTodo}
    </div>
  )
}