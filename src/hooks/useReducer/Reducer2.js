import { useReducer } from "react";

const initialState = {
  width: "50",
};
const reducer = (state, newState) => ({
  width: newState.width,
});
export const Reducer2 = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <>
      <div
        style={{ background: "teal", height: "30px", width: state.width }}
      ></div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => setState({ width: 100 })}>
          Increase bar size
        </button>
        <button onClick={() => setState({ width: 3 })}>
          Decrease bar size
        </button>
      </div>
    </>
  );
};
