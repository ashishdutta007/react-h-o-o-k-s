import React, { useState, useEffect } from "react";

export const useWindowWidth = initial => {
  const [width, setWidth] = useState(initial);
  useEffect(
    // called after every render/re-render (return)
    () => {
      console.log("Invoked useEffect on useWindowWidth[Custom Hook]");
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      //called before every re-render/unmount;
      return () => {
        // console.log("Will Unmount before re-render (return)");
        window.removeEventListener("resize", handleResize);
      };
    }
  );
  console.log("returning Custom Hook value");
  return width;
};

export const useTitle = (name, club) => {
  useEffect(() => {
    document.title = `${name}-${club}`;
  }, [name, club]);
};

export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = value => {
    setValue(value);
  };
  return {
    value,
    onChange
  };
};
