import React from "react";
import FilterTodo from "./FIlterTodo";

export default function ListTodo(props) {
  console.log(props.listTodo)
  console.log(props.sortTodo)

  const listTodo = props.listTodo.map((item) => {
      const todoDone = item.done ? 'done' : 'undone'
      if(item.active || item.completed) return
      return (
        <div
          key={item.id}
          className={`list-todo__item list-todo__item-${props.theme}`}
        >
          <input type="checkbox" 
            className="todo-checkbox" 
            onChange={e => {props.done(item.id)} } 
            checked={item.done && true} 
          />
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

  const activeListTodo = props.listTodo.map(item => {
    if(item.active){
      return item.active.map(activeItem => {
        const todoDone = activeItem.done ? 'done' : 'undone'
        return (
          <div
            key={activeItem.id}
            className={`list-todo__item lol list-todo__item-${props.theme}`}
          >
            <input type="checkbox" 
              className="todo-checkbox" 
              onChange={e => {props.done(activeItem.id)} } 
              checked={activeItem.done && true} 
            />
            <span className={`todo__item todo-${todoDone}-${props.theme}`}> {activeItem.todo} </span>
            <span
              className="delete"
              onClick={(e) => {
                props.removeTodo(activeItem.id);
              }}
            >
              X
            </span>
          </div>
        );
      })
    }
  })

  const completedListTodo = props.listTodo.map(item => {
    if(item.completed){
      return item.completed.map(completedItem => {
        const todoDone = completedItem.done ? 'done' : 'undone'
        return (
          <div
            key={completedItem.id}
            className={`list-todo__item lol list-todo__item-${props.theme}`}
          >
            <input type="checkbox" 
              className="todo-checkbox" 
              onChange={e => {props.done(completedItem.id)} } 
              checked={completedItem.done && true} 
            />
            <span className={`todo__item todo-${todoDone}-${props.theme}`}> {completedItem.todo} </span>
            <span
              className="delete"
              onClick={(e) => {
                props.removeTodo(completedItem.id);
              }}
            >
              X
            </span>
          </div>
        );
      })
    }
  })

  return (
    <div className="list-todo">
      {props.sortTodo.active ? activeListTodo : props.sortTodo.completed ? completedListTodo : listTodo}
      <FilterTodo
        theme={props.theme}
        listTodo={props.listTodo}
        removeCompletedTask={props.removeCompletedTask}
        showActiveTask={props.showActiveTask}
        showCompleted={props.showCompleted}
        showAll={props.showAll}
      />
    </div>
  );
}
