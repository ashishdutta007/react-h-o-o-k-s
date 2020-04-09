import React from "react";
import { render } from "react-dom";
import Card from "./Card";
import CardUseContext from "./CardUseContext";
import { ThemeContext, LocaleContext, theme, locale } from "./context";
import "./style.css";

function App() {
  return (
    // <ThemeContext.Provider value={theme.golden}>
    <CardUseContext />
    // </ThemeContext.Provider>
  );
}

render(<App />, document.getElementById("root"));
