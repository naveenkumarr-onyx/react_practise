import React from "react";

const Palindrome = () => {
  function palindrome(num) {
    let a = num.toString().split("").reverse().join("");
    // var b = parseInt(a);
    if (num.toString() === a) {
      return true;
    } else {
      return false;
    }
    // if (a) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  console.log(palindrome(-121));
  return <div>Palindrome</div>;
};

export default Palindrome;
