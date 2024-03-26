import React from "react";

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
  console.log(a);

  return (
    <div>
      <h1>{a.map((value) => value.content)}</h1>
    </div>
  );
};

export default Practise;
