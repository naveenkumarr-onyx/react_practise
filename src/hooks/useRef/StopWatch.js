import React, { useRef } from "react";
import { useState } from "react";
import Ref from "./Ref";

export const StopWatch = () => {
  const [startCount, setStartCount] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const refinitial = useRef(null);
  function handleStart() {
    setStartCount(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log("started");
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }
  let secondsPass = 0;
  if (startCount != null && now != null) {
    secondsPass = (now - startCount) / 1000;
  }
  return (
    <div className=" flex  flex-col gap-[20px]">
      <h1>count: {secondsPass.toFixed(5)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
