import React, { useEffect, useState } from "react";
import axios from "axios";

export const Effect = () => {
  const [count, setcount] = useState(0);
  const [data, setData] = useState("");
  const [age, setAge] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       setData(response.data[0].body);
  //       console.log("API is called");
  //     });
  // }, [count]);
  function handleClick() {
    setAge((prevState) => prevState + 1);
  }

  // cleanup effects
  useEffect(() => {
    // const clicked = () => console.log("Clicked");
    // window.addEventListener("click", clicked);

    return function testing() {
      // window.removeEventListener("click", clicked);
    };
  });

  useEffect(() => {
    setEffectLogs((prevStateEffect) => [...prevStateEffect, "Excuted....."]);
    // console.log("Empty useEffect");
  }, []);
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);
  console.log(effectLogs);
  function handleClickRandom() {
    setRandomNumber(Math.random());
  }
  return (
    <div className=" flex gap-[50px] items-center">
      {/* <h1 className=" font-bold">{count}</h1>
      <h1>{data}</h1>
      <button onClick={() => setcount(count + 1)}>click</button>
      <button
        onClick={handleClick}
        className="font-bold border-[2px] border-red-600 p-[10px]"
      >
        update Title!
      </button> */}
      <div className=" flex flex-col gap-[10px] items-center">
        <p className=" cursor-pointer">{randomNumber}</p>
        <button
          onClick={handleClickRandom}
          className="font-bold border-[2px] border-red-600 p-[10px]"
        >
          update Random Number
        </button>
        <h1>{effectLogs}</h1>
        {effectLogs.map((value, index) => (
          <div key={index}>{"😎".repeat(index) + value}</div>
        ))}
      </div>
      {/* <ArrayDepMount /> */}
    </div>
  );
};

export const ArrayDepMount = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      "effect fn has been invoked",
    ]);
  }, []);

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate random number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{"🍔".repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};
