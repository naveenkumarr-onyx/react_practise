import axios from "axios";
import React, { useEffect, useState } from "react";

const Async = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const hello = async () => {
      const url = "https://api.github.com/users/Bard";
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      //     "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
      //   },
      // };
      try {
        const response = await fetch(url);
        const result = await response.json();
        // const mappedData = {
        //   id: result.id,
        //   name: result.name,
        //   // Add more properties as needed
        // };
        // setData(result[0]);
        // const getting = result.map((item) => console.log("item" + item));
        // console.log(getting);
        // console.log("Response:", result);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    hello();
  }, []);

  function maniplulate(arr) {
    arr.push(5);
    arr = [1];
    return arr;
  }
  let list = [1, 2, 3, 4, 5];
  console.log(` function calling : ${maniplulate(list)}`); // 1
  console.log(list); // [1, 2, 3, 4, 5, 5]
  list = maniplulate(list);
  console.log(list); // [1]

  useEffect(() => {
    // let time = setInterval(() => {
    //   setData(new Date().getSeconds());
    //   console.log("timer");
    // });
    return () => clearInterval();
  }, [data]);
  return <div>{data}</div>;
};

export default Async;
