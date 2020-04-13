import React, { useState, useContext, useEffect } from "react";
import { ThemeContext, LocaleContext } from "./context";
import Row from "./Row";
import { useWindowWidth, useTitle } from "./CustomHooks/reusableCustomHooks";

export default function CardUseContext() {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("Man City");
  const [country, setCountry] = useState("🇧🇪");
  const width = useWindowWidth(window.innerWidth);
  useTitle(name, club);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePositionChange = e => {
    setPosition(e.target.value);
  };
  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Position">
        <input value={position} onChange={handlePositionChange} />
      </Row>
      <Row label="Club">
        <input readOnly value={club} />
      </Row>
      <Row label="Country">{country}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}
