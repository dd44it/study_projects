import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { ThemeContextConsumer } from "./ThemeContext";

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
