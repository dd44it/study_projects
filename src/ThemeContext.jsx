import React from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
  const [theme, setTheme] = React.useState("light")

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === "light" ? "night" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext };
