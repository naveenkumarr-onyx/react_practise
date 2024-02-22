import React, { useState } from "react";
import { AiFillApple, AiFillAmazonCircle } from "react-icons/ai";

const State = () => {
  const [changing, isChanging] = useState(false);
  function changingState() {
    isChanging(!changing);
    console.log(changing);
  }
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <button
        onClick={changingState}
        className="font-bold border-[2px] border-red-600 p-[10px]"
      >
        click me!
      </button>
      {changing ? <AiFillApple /> : <AiFillAmazonCircle />}
    </div>
  );
};

export default State;
