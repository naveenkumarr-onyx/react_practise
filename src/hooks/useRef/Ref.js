import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  let [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(count2);
    count.current += +1; //ref
    setCount2(count2++);
  }, [count2]);
  return (
    <div>
      <input
        type="text"
        className=" border-fuchsia-200 border-[2px]"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1 id="count2">DOM count:{count2}</h1>
      <h1>Render count:{count.current}</h1>
    </div>
  );
};

export default Ref;
