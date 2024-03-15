import React, { useEffect } from "react";
import { useState } from "react";

const FormValid = () => {
  const [state, changingState] = useState("");
  const [isValid, setValid] = useState(true);

  //   useEffect(() => {
  //     setValid(state);
  //   }, [state]);

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => {
          changingState(e.target.value);
        }}
        placeholder="Please enter the value"
        className=""
      />
      <p>{state}</p>
    </div>
  );
};

export default FormValid;
