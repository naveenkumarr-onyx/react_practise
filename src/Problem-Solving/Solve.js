import React, { useEffect } from "react";

export const Solve = () => {
  useEffect(() => {
    // Linear Search
    var arr = [6, 7, 2, 3, 5, 1, 4, 13];
    var target = 13;
    // var result = linearSearch(arr, target);
    // var result1 = binearySearch(arr, target);
    var result2 = selectionSort(arr);
    console.log(result2);
    // if (result !== -1) {
    //   console.log(`Element be found ${result}`);
    // } else {
    //   console.log("Element not be found");
    // }
    // if (result1 !== -1) {
    //   console.log(`Element be found ${result}`);
    // } else {
    //   console.log("Element not be found");
    // }

    function linearSearch(arr, target) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          return i;
        }
      }
      return -1;
    }
    function binearySearch(arr, target) {
      var left = 0;
      var right = arr.length - 1;
      while (left <= right) {
        //L     M       R
        // var arr = [5, 7, 9, 11, 13];
        var mid = (left + right) / 2;
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    function selectionSort(arr) {
      let temporaryValue = 0;
      let size = arr.length;
      for (var i = 0; i < size; i++) {
        let minIndex = -1;
        minIndex = i;
        for (var j = i + 1; j < size; j++) {
          if (arr[minIndex] > arr[j]) {
            minIndex = j;
          }
        }
        temporaryValue = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temporaryValue;
      }
      return arr;
    }
  });
  return <div className="font-bold">Problem-Solving</div>;
};
