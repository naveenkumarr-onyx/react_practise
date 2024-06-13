import React, { useEffect } from "react";

export const Solve = () => {
  useEffect(() => {
    const subArraySum = (arr, n, s) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        let currentSum = arr[i];
        if (currentSum === s) {
          result.push([i, i]);
        }
        for (let j = i + 1; j < n; j++) {
          currentSum += arr[j];
          if (s === undefined) return -1;
          if (currentSum === s) {
            result.push([i, j]);
          }
        }
      }
      return result;
    };

    const array = [5, 3, 4];
    const targetSum = 2;
    const result = subArraySum(array, array.length, targetSum);
    console.log(result);
  }, []);

  return <div className="font-bold">Problem-Solving</div>;
};
