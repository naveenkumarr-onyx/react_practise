import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const ButtonComponent = () => {
  const { handleChangeTheme } = useContext(GlobalContext);
  return (
    <div>
      <button onClick={handleChangeTheme}>change Theme</button>
    </div>
  );
};
