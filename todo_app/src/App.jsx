import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        <div className="todo">
          <Header />
          <InputTodo />
        </div>
      </main>
    </div>
  );
}

export default App;
