import React from "react";

export default function ListTodo(props){
  const listTodo = props.listTodo.map(item => {
    return <div className="list-todo__item"> {item} </div> 
  })
  return (
    <div className="list-todo">
      <div className="list-todo__item"> Jog around the park 3x </div>
      <div className="list-todo__item">10 min meditation</div>
      <div className="list-todo__item">Read for 1 hour</div>
      <div className="list-todo__item">Pick up groceries</div>
      <div className="list-todo__item">Complete Todo App on Frontend Mentor</div>
      {listTodo}
    </div>
  )
}