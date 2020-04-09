import React from "react";
import { render } from "react-dom";
import CardOld from "./CardOld";
import Card from "./Card";
import { ThemeContext, LocaleContext, theme, locale } from "./context";
import "./style.css";

function App() {
  return (
    // <ThemeContext.Provider value={theme.golden}>
    <Card />
    // </ThemeContext.Provider>
  );
}

render(<App />, document.getElementById("root"));
