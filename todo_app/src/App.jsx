import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ThemeContextConsumer } from "./ThemeContext";
import ListTodo from './components/ListTodo'

function App() {
  const [todo, setTodo] = useState({ todo: '' })

  function handleChange(e){
    const {name, value} = e.target
    setTodo({[name]: value})
  }

  const [listTodo, setListTodo] = useState([])

  function addTodo(e){
    if(!todo.todo) return
    if (e.charCode === 13) {
      setListTodo(prevData => [...prevData, todo.todo] )
      setTodo({todo: ''})
    }
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
                <ListTodo listTodo={listTodo} theme={context.theme} />

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
