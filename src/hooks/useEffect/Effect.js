import React, { useEffect, useState } from "react";
import axios from "axios";
const Effect = () => {
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
    const clicked = () => console.log("Clicked");
    window.addEventListener("click", clicked);

    return function testing() {
      window.removeEventListener("click", clicked);
    };
  });

  useEffect(() => {
    console.log("Empty useEffect");
  });
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
      <p className=" cursor-pointer">
        When you click the window you'll find a message logged to the console
      </p>
    </div>
  );
};

export default Effect;
