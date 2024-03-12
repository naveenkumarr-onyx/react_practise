import React, { useEffect, useRef, useState } from "react";
import StopWatch from "./StopWatch";

const Ref = () => {
  const [inputValue, setInputValue] = useState("");
  let [count2, setCount2] = useState(0);
  let initial = 0;
  const ref = useRef(initial);
  console.log(ref.current);
  useEffect(() => {}, [count2]);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    setCount2(ref.current);
  }
  return (
    <div>
      <input
        type="text"
        className=" border-fuchsia-200 border-[2px]"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>{count2}</h1>
      <button onClick={handleClick}>clicking!!!</button>
      <StopWatch />
    </div>
  );
};

export default Ref;
