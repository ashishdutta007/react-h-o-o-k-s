import React, { useState, useContext, useEffect } from "react";
import { ThemeContext, LocaleContext } from "./context";
import Row from "./Row";
import {
  useWindowWidth,
  useTitle,
  useFormInput
} from "./CustomHooks/reusableCustomHooks";

export default function CardUseContext() {
  const theme = useContext(ThemeContext);
  const [club, setClub] = useState("");
  const [country, setCountry] = useState("🇧🇪");
  // custom hooks
  const name = useFormInput("");
  const position = useFormInput("");
  const width = useWindowWidth(window.innerWidth);
  useTitle(name.value, club);

  const handleNameChange = e => {
    name.onChange(e.target.value);
  };

  const handlePositionChange = e => {
    position.onChange(e.target.value);
  };

  const handleClubChange = e => {
    setClub(e.target.value);
  };
  console.log("**. Returning react elements from functional component");
  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name.value} onChange={handleNameChange} />
      </Row>
      <Row label="Position">
        <input value={position.value} onChange={handlePositionChange} />
      </Row>
      <Row label="Club">
        <input value={club} onChange={handleClubChange} />
      </Row>
      <Row label="Country">{country}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}
