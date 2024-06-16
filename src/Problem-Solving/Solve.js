import React, { useEffect } from "react";

export const Solve = () => {
  useEffect(() => {
    // const subArraySum = (arr, n, s) => {
    //   const result = [];
    //   for (let i = 0; i < n; i++) {
    //     let currentSum = arr[i];
    //     if (currentSum === s) {
    //       result.push([i, i]);
    //     }
    //     for (let j = i + 1; j < n; j++) {
    //       currentSum += arr[j];
    //       if (s === undefined) return -1;
    //       if (currentSum === s) {
    //         result.push([i, j]);
    //       }
    //     }
    //   }
    //   return result;
    // };

    const subArraySum = (arr, n, s) => {
      var currentSum = 0;
      var start = 0;
      for (let i = 0; i < n; i++) {
        currentSum = currentSum + arr[i];
        // console.log((currentSum = currentSum + arr[i]));
        while (currentSum > s && start <= i) {
          currentSum = currentSum - arr[start];
          start++;
        }
        if (currentSum === s) {
          return [start + 1, i + 1];
        }
      }
      return [-1];
    };

    const array = [1, 2, 3, 5, 6, 7, 8];
    const targetSum = 5;
    const result = subArraySum(array, array.length, targetSum);
    console.log(`result ${result}`);
  }, []);

  return <div className="font-bold">Problem-Solving</div>;
};
