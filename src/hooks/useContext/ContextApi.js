import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const ThemeContext = createContext(null);
export const ContextApi = () => {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label className=" flex flex-row gap-[5px]">
        <input
          type="checkbox"
          // checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        use Dark mode
      </label>
    </ThemeContext.Provider>
  );
};

export function Form() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-red-500" : "bg-slate-300"
      }flex flex-row gap-[10px]`}
    >
      <button
        className={`${theme === "light" ? "bg-red-500" : " bg-green-800"}`}
      >
        IN
      </button>
      <button>OUT</button>
    </div>
  );
}
