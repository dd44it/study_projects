import React from "react";

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    theme: "light",
  };
  toggleTheme = () => {
    this.setState((prevData) => {
      return {
        theme: prevData.theme === "light" ? "night" : "light",
      };
    });
  }
  render() {
    return (
      <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
