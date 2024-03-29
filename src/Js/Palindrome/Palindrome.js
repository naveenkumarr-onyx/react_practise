import React from "react";

const Palindrome = () => {
  // function palindrome(num) {
  //   let a = num.toString().split("").reverse().join("");
  //   // var b = parseInt(a);
  //   if (num.toString() === a) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // if (a) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }
  // function Roman(s) {
  //   var roman = {
  //     I: 1,
  //     V: 5,
  //     X: 10,
  //     L: 50,
  //     C: 100,
  //     D: 500,
  //     M: 1000,
  //   };
  //   s.split("").forEach((num, i) => {
  //     if (roman[num] < roman[s[i + 1]]) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  // }
  function romanToInt(s) {
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const current = romanMap[s[i]];
      const next = romanMap[s[i + 1]];

      if (next && current < next) {
        result += next - current;
        i++; // Skip the next character, as it has already been processed
      } else {
        result += current;
      }
    }

    return result;
  }
  console.log(romanToInt("L"));
  return <div>Palindrome</div>;
};

export default Palindrome;
