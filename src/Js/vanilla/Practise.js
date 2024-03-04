import React from "react";

const Practise = () => {
  let result = 1;
  let counter = 0;
  while (counter < 10) {
    result = result * 2;
    counter += 1;
    // console.log(numbers);
    // numbers += 2;
  }
  console.log(result);
  console.log(counter);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  return <div></div>;
};

export default Practise;
