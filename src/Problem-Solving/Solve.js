import React, { useEffect } from "react";

export const Solve = () => {
  useEffect(() => {
    const subArraySum = (arr, n, s) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        let currentSum = arr[i];
        if (currentSum === s) {
          result.push([arr[i]]);
        }
        for (let j = i + 1; j < n; j++) {
          currentSum += arr[j];
          if (currentSum === s) {
            result.push(arr.slice(i, j + 1));
          }
        }
      }
      return result;
    };

    const array = [0, 1, 2, 7, 5];
    const targetSum = 12;
    const result = subArraySum(array, array.length, targetSum);
    console.log(result);
  }, []);

  return <div className="font-bold">Problem -Solving</div>;
};
