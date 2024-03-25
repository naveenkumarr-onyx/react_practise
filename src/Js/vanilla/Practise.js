import React from "react";

const Practise = () => {
  let duplicate = [1, 2, 3, 3, 3, 4, 5, 7];
  let arr = duplicate.filter(
    (value, index) => duplicate.indexOf(value) !== index
  );
  // console.log(arr);
  function house(num) {
    if (num === 0) {
      return 0;
    } else {
      return 5 * num + 1;
    }
  }
  console.log(house(0));

  return <div></div>;
};

export default Practise;
