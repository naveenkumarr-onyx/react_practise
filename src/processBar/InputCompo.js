import React, { useState } from "react";
import { useRef } from "react";

const InputCompo = ({ newVal }) => {
  const [state, setState] = useState("");
  function State(e) {
    console.log(state);
  }
  function handleChanger(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChanger} />
      <h2 onClick={State}>Input Component fields</h2>
      <h1>{state}</h1>
    </div>
  );
};

export default InputCompo;
