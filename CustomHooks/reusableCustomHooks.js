import React, { useState, useEffect } from "react";

export const useFormInput = initialValue => {
  console.log("1. Invoked useFormInput[Custom Hook]");
  const [value, setValue] = useState(initialValue);
  const onChange = value => {
    setValue(value);
  };
  return {
    value,
    onChange
  };
};

export const useWindowWidth = initial => {
  const [width, setWidth] = useState(initial);
  useEffect(
    // called after every render/re-render (return)
    () => {
      console.log("2. Invoked useEffect on useWindowWidth[Custom Hook]");
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      //called before every re-render/unmount;
      return () => {
        // console.log("Will Unmount before re-render (return)");
        window.removeEventListener("resize", handleResize);
      };
    },
    []
  );
  console.log("2. returning Custom Hook value");
  return width;
};

export const useTitle = (name, club) => {
  useEffect(() => {
    console.log("3. Invoked useEffect on useTitle[Custom Hook]");
    document.title = `${name}-${club}`;
  }, [name, club]);
  console.log("3. returning Custom Hook value");
  return document.title;
};
