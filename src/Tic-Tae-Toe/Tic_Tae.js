import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";

function Square({ value, onSquareClick }) {
  return <button className=" bg-green-400 w-4">{value}</button>;
}

let data = ["", "", "", "", "", "", "", "", ""];
console.log(`before data: ${data}`);
const Tic_Tae = () => {
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let ref = useRef();
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<h1 className="flex justify-center items-center">X</h1>`;
      data[num] = "x";
      console.log("evennumber" + data[num]);
      console.log(data);
      setCount(++count);
      //   console.log(count);
    } else {
      e.target.innerHTML = `<h1>O</h1>`;
      data[num] = "o";
      console.log("oddnumber" + data[num]);
      setCount(++count);
      console.log(count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[4] === data[5] && data[5] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    if (winner === "x") {
      console.log(winner);
      ref.current.innerHTML = "Congratulations X";
    } else if (winner === "o") {
      ref.current.innerHTML = "Congratulations O";
    } else {
      ref.current.innerHTML = "its a Tie";
    }
    setLock(true);
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    ref.current.innerHTML = "Tic-Tac-Toe";
  };
  return (
    <div className=" flex flex-col gap-[5px]">
      <h1 className=" text-center font-bold underline" ref={ref}>
        Tic-Tac-Toe
      </h1>
      <div className=" flex flex-col gap-[10px] bg-indigo-300 p-[10px]">
        <div className=" flex gap-[10px] ">
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className=" flex gap-[10px] ">
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className=" flex gap-[10px] ">
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className=" bg-gray-400 w-[50px] h-[50px] rounded-sm"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <div
        onClick={() => {
          reset();
        }}
      >
        refresh
      </div>
    </div>
  );
};

export default Tic_Tae;
