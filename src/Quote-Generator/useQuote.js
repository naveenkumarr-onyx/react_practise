import React, { useEffect, useState } from "react";

const YourComponent = () => {
  const [quote, setQuote] = useState([]);
  console.log(quote + "before use");
  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getQuote();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const random = () => {
    let select = quote[Math.floor(Math.random() * quote.length)];
    console.log(select);
    if (!select) {
      alert("Limit Exceeded");
      return;
    }
    // setQuote(select);
  };

  return (
    <div>
      <h1>
        {quote.map((value) => {
          return (
            <div>
              <h1>{value.text}</h1>
              <p>{value.author.split(",")[0]}</p>
            </div>
          );
        })}
      </h1>
      <button
        onClick={() => {
          random();
        }}
      >
        refresh
      </button>
    </div>
  );
};

export default YourComponent;
