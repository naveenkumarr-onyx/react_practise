import { createContext, useState } from "react";

export const GlobalContext = createContext(null); // create a context first

export const GlobalState = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <GlobalContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      {children}
    </GlobalContext.Provider>
  ); //call the context and passing the children
};
