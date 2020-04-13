import React from "react";
import { render } from "react-dom";
import { ThemeContext, LocaleContext, theme, locale } from "./context";
import Card from "./Card";
import CardCustomHooks from "./CardCustomHooks";
import "./style.css";

function App() {
  return (
    // <ThemeContext.Provider value={theme.golden}>
    // <Card />
    <CardCustomHooks />
    // </ThemeContext.Provider>
  );
}

render(<App />, document.getElementById("root"));
