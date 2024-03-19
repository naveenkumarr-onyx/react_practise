import React, { useEffect } from "react";
import { useState } from "react";

const FormValid = () => {
  const [state, changingState] = useState("");
  const [isValid, setValid] = useState(true);

  var myObject = {
    key: 1,
    key2: 2,
  };
  myObject["key3"] = 3;
  myObject["key4"] = 4;
  console.log(myObject);
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
