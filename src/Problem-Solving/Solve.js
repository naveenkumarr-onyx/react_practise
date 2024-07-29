import React, { useEffect, useState } from "react";

export const Solve = () => {
  // Linear Search
  // var arr = [650, 700, 2000, 3, 5, 11, 4, 13];
  // var arr = [7, 5, 3, 0, 8, 4];
  // var target = 13;
  // var result = linearSearch(arr, target);
  // var result1 = binearySearch(arr, target);
  // var result2 = selectionSort(arr);
  // console.log(result2);
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

  //   function linearSearch(arr, target) {
  //     for (var i = 0; i < arr.length; i++) {
  //       if (arr[i] === target) {
  //         return i;
  //       }
  //     }
  //     return -1;
  //   }
  //   function binearySearch(arr, target) {
  //     var left = 0;
  //     var right = arr.length - 1;
  //     while (left <= right) {
  //       //L     M       R
  //       // var arr = [5, 7, 9, 11, 13];
  //       var mid = (left + right) / 2;
  //       if (arr[mid] === target) {
  //         return mid;
  //       } else if (arr[mid] < target) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     }
  //   }

  //   function selectionSort(arr) {
  //     let temporaryValue = 0;
  //     let size = arr.length;

  //     for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index]);
  //     }
  //     for (var i = 0; i < size - 1; i++) {
  //       let minIndex = -1;
  //       minIndex = i;
  //       for (var j = i + 1; j < size; j++) {
  //         if (arr[minIndex] > arr[j]) {
  //           minIndex = j;
  //         }
  //       }
  //       temporaryValue = arr[i];
  //       arr[i] = arr[minIndex];
  //       arr[minIndex] = temporaryValue;
  //       for (let index = 0; index < arr.length; index++) {
  //         // console.log(arr[index]);
  //       }
  //     }
  //     return arr;
  //   }
  // });
  // const characters = [
  //   { name: "James T. Kirk", series: ["Star Trek"] },
  //   {
  //     name: "Spock",
  //     series: ["Star Trek", "Star Trek: The Next Generation"],
  //   },
  //   { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
  //   {
  //     name: "Worf",
  //     series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
  //   },
  // ];
  // const filtering2 = characters.filter((character) => {
  //   return character.series.includes("Star Trek: The Next Generation");
  // });

  // const arr = [1, -1, 2, 3, 4, 5, 6];
  // arr.reduce((accumulator, val) => {
  //   return accumulator + val;
  // }, 0);

  // const data = {
  //   users: [
  //     {
  //       name: "Alice",
  //       posts: [
  //         { title: "Post 1", comments: ["Good post!", "Nice one!"] },
  //         { title: "Post 2", comments: ["Very informative."] },
  //       ],
  //     },
  //     {
  //       name: "Bob",
  //       posts: [{ title: "Post 3", comments: [] }],
  //     },
  //   ],
  // };
  // if (data.users) {
  //   for (let user of data.users) {
  //     if (user.posts) {
  //       for (let post of user.posts) {
  //         // console.log(`Title: ${post.title} comments: ${post.comments}`);
  //       }
  //     }
  //   }
  // }
  function sq(num) {
    // // Convert the number to a string to iterate over each digit
    // let digits = num.toString();
    // // Square each digit and concatenate the results
    // let squaredDigits = "";
    // for (let digit of digits) {
    //   squaredDigits += (digit * digit).toString();
    // }
    // // Convert the result back to a number
    // return Number(squaredDigits);
  }
  // function square(num) {
  //   return Number(
  //     ("" + num)
  //       .split("")
  //       .map((val) => {
  //         return val * val;
  //       })
  //       .join("")
  //   );
  // }

  // console.log(square(3212)); // Call the function and print the result

  function Neutralisation(s1, s2) {
    let result = "";
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
        result += s1[i];
      } else {
        result += 0;
      }
    }
    return result;
  }
  //1
  // var s3 = "--++--";
  // var s4 = "++--++";
  // //2
  // var s1 = "-+-+-+";
  // var s2 = "-+-+-+";
  // //3
  // var s5 = "-++-";
  // var s6 = "-+-+";
  // console.log(Neutralisation(s3, s4)); // Call the function and print the

  // function easy(x) {
  //   var vowels = "aeiou";
  //   let count = 0;
  //   for (let char of x) {
  //     if (vowels.includes(char)) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(easy("naveenkumar"));
  function population(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
      p0 = p0 * (1 + percent / 100) + aug;
      years++;
    }
    return years;
  }

  // function twoToOne(s1, s2) {
  //   var a = s1 + s2;
  //   return [...new Set(a)].sort().join("");
  // }
  // var s1 = "xyaabbbccccdefww";
  // var s2 = "xxxxyyyyabklmopq";
  // console.log(twoToOne(s1, s2));

  // function findShort(s) {
  //   return Math.max(...s.split(" ").map((s) => s.length));
  // }
  // console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

  // function character(b) {
  //   return /^[a-zA-Z]+$/.test(b);
  // }
  // console.log(character("/DER"));

  // function camelCase() {
  //   var str = "";
  //   var res = "";
  //   var count = 0;
  //   for (var i = 0; i < str.length; i++) {
  //     if (
  //       str[i] === str[i].toUpperCase() &&
  //       str[i] !== str[i].toLowerCase() &&
  //       i !== 0
  //     ) {
  //       res += " ";
  //     }
  //     res += str[i];
  //   }
  //   return res;
  // }
  // alternate Method
  function camelCase(string) {
    return string.replace(/([A-Z])/g, " $1");
  }
  console.log(camelCase("camerCaseTests"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchingData = async () => {
    try {
      setLoading(true);
      const api = await fetch("https://dummyjson.com/carts", {
        method: "GET",
      });
      const response = await api.json();
      setData(response.carts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  function ApiFetching() {
    fetchingData();
  }
  return (
    <div className="font-bold">
      {/* {characters.map((character, index) => {
        return (
          <div key={index}>
            <p>
              {character.name}-{character.series[0]}
            </p>
          </div>
        );
      })}
      <br />
      {data.users.map((val, index) => {
        return <div key={index}>{val.name}</div>;
      })}
      {data.users.map((val3, index) => {
        return val3.posts.map((val, index) => {
          return (
            <div key={index}>
              <p>
                {val3.name}: {val.title}
              </p>
              {val.comments < 0 ? <p>No comments</p> : val.comments}
            </div>
          );
        });
      })} */}
      {loading ? <p> Data is Fetching....</p> : ""}
      <button onClick={ApiFetching}>Fetch Api</button>
      {data?.map((cart, index) => {
        return (
          <div key={cart.id}>
            <h1>{cart.discountedTotal}</h1>
            <h1>
              {cart.products.map((val, index) => {
                return val.title;
              })}
            </h1>
          </div>
        );
      })}
      <h1>hi</h1>
    </div>
  );
};
