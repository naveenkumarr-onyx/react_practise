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
        console.log("Response:", result);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    hello();
  });

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          {/* Render more properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default Async;
