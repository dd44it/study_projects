import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ThemeContextConsumer } from "./ThemeContext";
import ListTodo from './components/ListTodo'

function App() {
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
                <InputTodo />
                <ListTodo />

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
