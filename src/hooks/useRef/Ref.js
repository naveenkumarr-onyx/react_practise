import React, { useEffect, useRef, useState } from "react";
import StopWatch from "./StopWatch";
import VideoPlayer from "./VideoPlayer";

export const Ref = () => {
  const [inputValue, setInputValue] = useState("");
  let [count2, setCount2] = useState(0);
  let initial = null;
  const ref = useRef(initial);

  return (
    <div>
      <input
        type="text"
        className=" border-fuchsia-200 border-[2px]"
        ref={ref}
      />
      <h1>{count2}</h1>
      <VideoPlayer />
    </div>
  );
};
