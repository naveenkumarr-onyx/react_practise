import React, { useState } from "react";
import { AiFillApple, AiFillAmazonCircle } from "react-icons/ai";

const State = () => {
  // using null and not null
  const [changing, isChanging] = useState(false);
  function changingState() {
    isChanging(!changing);
    console.log(changing);
  }
  // Input
  const [changingInput, isChangingInput] = useState("");
  function eventChanging(e) {
    isChangingInput(e.target.value);
  }
  return (
    <div className="flex justify-center gap-[10px] items-center flex-col">
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
    </div>
  );
};

export default State;
