import React, { useState, useContext, useEffect } from "react";
import { ThemeContext, LocaleContext } from "./context";
import Row from "./Row";

export default function CardUseContext() {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("Man City");
  const [country, setCountry] = useState("🇧🇪");

  useEffect(() => {
    document.title = `${name}-${club}`;
    console.log(document.title);
  }, [name, club]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(
    // called after every render/re-render
    () => {
      console.log("Invoked after render");
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      //called before every re-render/unmount;
      return () => {
        console.log("Will Unmount before re-render");
        window.removeEventListener("resize", handleResize);
      };
    },
    []
  );

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
