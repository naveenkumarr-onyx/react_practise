import React, { createContext, useContext } from "react";
const Theme = createContext("dark");
const Context = () => {
  const theme = useContext(Theme);
  const stlying = {
    background: theme === "light" ? "violet" : "green",
    color: theme === "Dark" ? "white" : "palevioletred",
    width: "100%",
    minHeight: "200px",
  };
  return <div style={stlying}>{`The theme is ${theme}`}</div>;
};

export default Context;
