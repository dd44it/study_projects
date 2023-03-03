import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ThemeContextConsumer } from "./ThemeContext";
import ListTodo from './components/ListTodo';
import { nanoid } from "nanoid";


function App() {
  const [todo, setTodo] = useState({ todo: '' })

  function handleChange(e){
    const {name, value} = e.target
    setTodo({[name]: value})
  }

  const [listTodo, setListTodo] = useState([
    {
      id: nanoid(),
      todo: 'Jog around the park 3x'
    },
    {
      id: nanoid(),
      todo: '10 minutes meditation'
    },
    {
      id: nanoid(),
      todo: 'Read for 1 hour'
    },
    {
      id: nanoid(),
      todo: 'Pick up groceries'
    },
    {
      id: nanoid(),
      todo: 'Complete Todo App on Frontend Mentor'
    },
  ])

  function addTodo(e){
    if(!todo.todo) return
    if (e.charCode === 13) {
      const updateTodoList = [
        ...listTodo,
        {
          id: nanoid(),
          todo: todo.todo
        }
      ]
      setListTodo(updateTodoList)
      setTodo({todo: ''})
    }
  }

  function removeTodo(id){
    setListTodo(prevData => prevData.filter(btn => btn.id !== id ))
  }

  return (
    <div className="App">
      <ThemeContextConsumer>
        {(context) => (
          <>
            <header className={`header header-${context.theme}`}>
              <div className="todo">
                <Header
                  theme={context.theme}
                  toggleTheme={context.toggleTheme}
                />
                <InputTodo todo={todo.todo} handleChange={handleChange} keyPress={addTodo} theme={context.theme} />
                <ListTodo listTodo={listTodo} theme={context.theme} removeTodo={removeTodo} />

              </div>
            </header>
            <main className={`main main-${context.theme}`}></main>
          </>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

export default App;
