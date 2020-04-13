import React, { useState } from "react";
import { ThemeContext, LocaleContext } from "./context";
import Row from "./Row";

export default function Card() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("Man City");
  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePositionChange = e => {
    setPosition(e.target.value);
  };
  return (
    <ThemeContext.Consumer>
      {theme => {
        // alert(theme);
        return (
          <section className={theme}>
            <Row label="Name">
              <input value={name} onChange={handleNameChange} />
            </Row>
            <Row label="Position">
              <input value={position} onChange={handlePositionChange} />
            </Row>
            <Row label="Club">
              <input readonly value={club} />
            </Row>
          </section>
        );
      }}
    </ThemeContext.Consumer>
  );
}
