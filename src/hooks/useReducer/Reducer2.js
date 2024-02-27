import { useReducer } from "react";

const initialState = {
  width: "50",
};
const reducer = (state, newState) => ({
  width: newState.width,
});
export const Reducer2 = () => {
  const a = ["hello", "hi", "world"];
  localStorage.setItem("test", a);
  // console.log(b);
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <>
      <div
        style={{ background: "teal", height: "30px", width: state.width }}
      ></div>
      <div
        className=" flex flex-start flex-col gap-[10px]"
        style={{ marginTop: "3rem" }}
      >
        <button onClick={() => setState({ width: 100 })}>
          Increase bar size
        </button>
        <button onClick={() => setState({ width: 3 })}>
          Decrease bar size
        </button>
        <button>Remove Local Storage</button>
      </div>
    </>
  );
};
