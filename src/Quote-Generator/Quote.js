import React, { useEffect, useState } from "react";
import YourComponent from "./useQuote";

const Quote = () => {
  const [quotes, setQuotes] = useState({
    text: "enius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });

  let quote = [];
  console.log("before" + quote);
  async function getQuote() {
    let response = await fetch("https://type.fit/api/quotes");
    quote = await response.json();
  }
  getQuote();
  const random = () => {
    let select = quote[Math.floor(Math.random() * quote.length)];
    if (!select) {
      alert("Limit Exceeded");
      return;
    }
    setQuotes(select);
  };

  return (
    <div>
      <div>
        <h1>{quotes.text}</h1>
        <p>{quotes.author.split(",")[0]}</p>
      </div>
      <div className=" flex gap-[10px]">
        <button
          onClick={() => {
            random();
          }}
        >
          Refresh
        </button>
        <button>Twitter</button>
        {/* <YourComponent /> */}
      </div>
    </div>
  );
};

export default Quote;
