import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import initialTodo from "../initialData";
import { ThemeContext } from "../ThemeContext";

export default function useTodoApp(){
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [todo, setTodo] = useState({ todo: "", done: false });
  const [filterTodo, setfilterTodo] = useState("all");

  const [listTodo, setListTodo] = useState({
    todo: [...initialTodo],
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setTodo((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function filteredTask(filter) {
    if (filter === "all") {
      setfilterTodo(filter);
    } else if (filter === "active") {
      setfilterTodo(filter);
    } else if (filter === "completed") {
      setfilterTodo(filter);
    }
  }

  function addTodo(e) {
    if (!todo.todo) return;
    if (e.charCode === 13) {
      setListTodo({
        todo: [
          ...listTodo.todo,
          {
            id: nanoid(),
            todo: todo.todo,
            done: todo.done,
          },
        ],
      });
      setTodo({ todo: "", done: false });
    }
  }

  function removeTodo(id) {
    setListTodo((prevData) => ({
      filter: prevData.filter,
      todo: prevData.todo.filter((todo) => todo.id !== id),
    }));
  }

  function doneTodo(id) {
    setListTodo((prevData) => ({
      filter: prevData.filter,
      todo: prevData.todo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  }

  function removeCompletedTask() {
    setListTodo((prevData) => ({
      filter: prevData.filter,
      todo: prevData.todo.filter((todo) => todo.done === false),
    }));
  }
  
  return { todo, listTodo, handleChange, addTodo, removeTodo, doneTodo, filterTodo, removeCompletedTask, filteredTask, theme, toggleTheme}
}