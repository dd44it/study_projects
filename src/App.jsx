import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import FilterTodo from "./components/FIlterTodo";
import useTodoApp from "./hooks/useTodoApp"

function App() {

  const {
    todo,
    listTodo,
    handleChange,
    addTodo,
    removeTodo,
    doneTodo,
    filterTodo,
    removeCompletedTask,
    filteredTask,
    theme,
    toggleTheme
   } = useTodoApp();

  // const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="App">
      <header className={`header header-${theme}`}>
        <div className="todo">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <InputTodo
            todo={todo.todo}
            done={todo.done}
            handleChange={handleChange}
            keyPress={addTodo}
            theme={theme}
          />
          <ListTodo
            listTodo={listTodo.todo}
            theme={theme}
            removeTodo={removeTodo}
            done={doneTodo}
            filter={filterTodo}
          />
          <FilterTodo
            theme={theme}
            listTodo={listTodo.todo}
            removeCompletedTask={removeCompletedTask}
            filteredTask={filteredTask}
            filter={filterTodo}
          />
        </div>
      </header>
      <main className={`main main-${theme}`}></main>
    </div>
  );
}

export default App;
