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
  // console.log(result);
  // console.log(counter);

  for (let counter = 20; counter > 20; counter = counter + 1) {
    // if (counter % 7 === 0) {
    // console.log(counter);
    //   break;
    // }
  }
  function egg(price) {
    return "The price of the egg is " + price;
  }
  function chicken() {
    var today = new Date();
    var dat = today.getDay();
    return console.log(`Today date: ${dat} ${egg(28)}`);
  }
  chicken();
  return <div></div>;
};

export default Practise;
