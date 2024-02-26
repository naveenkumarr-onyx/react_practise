import React, { useCallback, useEffect, useReducer } from "react";
import { Reducer2 } from "./Reducer2";
const initialState = {
  width: 100,
};

const Bar = (state, action) => {
  switch (action) {
    case "plus":
      return { width: state.width + 15 };
    case "minus":
      return { width: state.width - 15 };
    case "reset":
      return { width: (state.width = 0) };
    default:
      throw new Error("Invalid action");
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(Bar, initialState);
  const hello = useCallback(() => {
    dispatch("plus");
  }, [dispatch]);
  useEffect(() => {
    hello();
    console.log("Reducer calling");
  }, [hello]);
  useEffect(() => {
    // setTimeout(() => {
    //   hello();
    // }, 5000);
    // return () => {
    //   clearTimeout();
    // };
  });
  return (
    <div>
      <div
        style={{ background: "teal", height: "30px", width: state.width }}
      ></div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={hello}>Increase</button>
        <button onClick={() => dispatch("minus")}>Decrease</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <Reducer2 />
    </div>
  );
};

export default Reducer;
