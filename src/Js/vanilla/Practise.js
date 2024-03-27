import React, { useEffect } from "react";

const Practise = () => {
  let duplicate = [1, 2, 3, 3, 3, 4, 5, 7];
  let arr = duplicate.filter(
    (value, index) => duplicate.indexOf(value) !== index
  );
  // console.log(arr);
  let a = [
    {
      content: "hello",
      heading: "practice",
    },
    {
      content: "hello",
      heading: "practice",
    },
    { content: "hello", heading: "practice" },
    {
      content: "hello",
      heading: "practice",
    },
    {
      content: "hello",
      heading: "practice",
    },
    {
      content: "hello",
      heading: "practice",
    },
    {
      content: "hello",
      heading: "practice",
    },
  ];
  // console.log(a);

  var b = "bEEFGBuFBRrHgUHlNFYaYr";
  function test(b) {
    return [...b].filter((c) => c.toLowerCase() === c).join("");
  }
  // console.log(test(b));

  function swap(num) {
    let a = num.toString().split("").reverse().join("");
    var b = parseInt(a);
    if (b > num) {
      return false;
    } else {
      return true;
    }
  }
  console.log(swap(43));
  return <div>{/* <h1>{a.map((value) => value.content)}</h1> */}</div>;
};

export default Practise;
