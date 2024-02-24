import React, { useState } from "react";
import { AiFillApple, AiFillAmazonCircle } from "react-icons/ai";
import Effect from "../useEffect/Effect";

const State = () => {
  // using null and not null
  const [changing, isChanging] = useState(false);
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount((prevState) => prevState + 1);
    // console.log()
  }
  console.log(count);
  function changingState() {
    isChanging(!changing);
  }
  // Input
  const [changingInput, isChangingInput] = useState("");
  function eventChanging(e) {
    isChangingInput(e.target.value);
  }
  return (
    <div className="flex justify-center gap-[10px] items-center flex-col">
      <h1>Count:{count}</h1>
      <button
        onClick={handleChange}
        className="font-bold border-[2px] border-red-600 p-[10px]"
      >
        increase Count
      </button>
      <button
        onClick={changingState}
        className="font-bold border-[2px] border-red-600 p-[10px]"
      >
        click me!
      </button>
      {changing ? <AiFillApple /> : <AiFillAmazonCircle />}

      {/*  
      input value to get using useState
      */}
      <h1>{changingInput}</h1>
      <input
        type="text"
        onChange={(e) => eventChanging(e)}
        className=" border-[2px] border-red-600 p-[10px]"
      />
      <Effect />
    </div>
  );
};

export default State;
