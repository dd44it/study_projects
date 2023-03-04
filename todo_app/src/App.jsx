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
      done: true,
      todo: 'Complete online JavaScript course'
    },
    {
      id: nanoid(),
      done: false,
      todo: 'Jog around the park 3x'
    },
    {
      id: nanoid(),
      done: false,
      todo: '10 minutes meditation'
    },
    {
      id: nanoid(),
      done: false,
      todo: 'Read for 1 hour'
    },
    {
      id: nanoid(),
      done: false,
      todo: 'Pick up groceries'
    },
    {
      id: nanoid(),
      done: false,
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
          done: false,
          todo: todo.todo,
        }
      ]
      setListTodo(updateTodoList)
      setTodo({todo: ''})
    }
  }

  function removeTodo(id){
    setListTodo(prevData => prevData.filter(btn => btn.id !== id ))
  }

  function doneTodo(id){
    setListTodo(prevData => prevData.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo ))
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
                <ListTodo listTodo={listTodo} theme={context.theme} removeTodo={removeTodo} done={doneTodo} />

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
