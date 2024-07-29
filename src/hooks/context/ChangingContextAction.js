import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const ChangingContextAction = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h1
        className={`${
          theme === "light" ? " text-3xl bg-green-400" : " text-sm"
        }`}>
        NAVEEN KUMAR R
      </h1>
    </div>
  );
};

export default ChangingContextAction;
