import React, { useEffect, useState } from "react";
import axios from "axios";
const Effect = () => {
  const [count, setcount] = useState(0);
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].body);
        console.log(response.data);
        console.log("API is called");
      });
  }, [count]);
  return (
    <div>
      <h1 className=" font-bold">{count}</h1>
      <h1>{data}</h1>
      <button onClick={() => setcount(count + 1)}>click</button>
    </div>
  );
};

export default Effect;
