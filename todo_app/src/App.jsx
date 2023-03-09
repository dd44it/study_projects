import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ThemeContextConsumer } from "./ThemeContext";
import ListTodo from './components/ListTodo';
import { nanoid } from "nanoid";
import initialTodo from "./initialData";
import FilterTodo from "./components/FIlterTodo";


function App() {
  const [todo, setTodo] = useState({ todo: '' });

  const [filterTodo, setfilterTodo] = useState('all');

  function handleChange(e){
    const {name, value} = e.target
    setTodo({[name]: value})
  }

  const [listTodo, setListTodo] = useState({
    todo: [...initialTodo],
  });

  function filteredTask(filter){
    if(filter === 'all'){
      setfilterTodo(filter)
    }
    else if(filter === 'active'){
      setfilterTodo(filter)
    }
    else if(filter === 'completed'){
      setfilterTodo(filter)
    }
  }

  function addTodo(e){
    if(!todo.todo) return
    if (e.charCode === 13) {
      setListTodo({
        todo: [
          ...listTodo.todo,
          {
            id: nanoid(),
            todo: todo.todo,
            done: false
          }
        ]
      })
      setTodo({todo: ''})
      console.log(listTodo)
    }
  }

  function removeTodo(id){
    setListTodo(prevData => (
      {
        filter: prevData.filter,
        todo: prevData.todo.filter(todo => todo.id !== id)
      }
    ))
  }

  function doneTodo(id){
    setListTodo(prevData => (
      {
        filter: prevData.filter,
        todo: prevData.todo.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo )
      }
    ))
  }

  function removeCompletedTask(){
    setListTodo(prevData =>  (
      {
        filter: prevData.filter,
        todo: prevData.todo.filter(todo => todo.done === false )
      }
    ))
    console.log('listTodo', listTodo)

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
                <ListTodo 
                  listTodo={listTodo.todo}
                  theme={context.theme}
                  removeTodo={removeTodo}
                  done={doneTodo}
                  filter={filterTodo}
                  />
                  <FilterTodo
                    theme={context.theme}
                    listTodo={listTodo.todo}
                    removeCompletedTask={removeCompletedTask}
                    filteredTask={filteredTask}
                    filter={filterTodo}
                  />

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
