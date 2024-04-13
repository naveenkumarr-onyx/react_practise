import React, { useEffect } from "react";

const Practise = () => {
  // let duplicate = [1, 2, 3, 3, 3, 4, 5, 7];
  // let arr = duplicate.filter(
  //   (value, index) => duplicate.indexOf(value) !== index
  // );
  // console.log(arr);
  // let a = [
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  //   { content: "hello", heading: "practice" },
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  //   {
  //     content: "hello",
  //     heading: "practice",
  //   },
  // ];
  // console.log(a);

  // var b = "bEEFGBuFBRrHgUHlNFYaYr";
  // function test(b) {
  //   return [...b].filter((c) => c.toLowerCase() === c).join("");
  // }
  // console.log(test(b));
  // useEffect(() => {
  //   // let drinks = [
  //   //   { name: "lemonade", price: 50 },
  //   //   { name: "lime", price: 10 },
  //   //   { name: "lime", price: 60 },
  //   // ];
  //   // drinks.sort((a, b) => {
  //   //   return a.price - b.price;
  //   // });
  //   // console.log(drinks);
  //   // Create a method in the Person class which returns how another person's age compares.
  //   // Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
  //   // following format:
  //   // p1 = Person("Samuel", 24)
  //   // p2 = Person("Joel", 36)
  //   // p3 = Person("Lily", 24)
  //   // p1.compareAge(p2) ➞ "Joel is older than me."
  //   // p2.compareAge(p1) ➞ "Samuel is younger than me."
  //   // p1.compareAge(p3) ➞ "Lily is the same age as me."

  //   class Person {
  //     constructor(name, age) {
  //       this.name = name;
  //       this.age = age;
  //     }

  //     compareAge(other) {
  //       // if (p1.age === p3.age) {
  //       //   console.log(`${p1.name} is Same age as  ${p3.name} `);
  //       // }
  //       // if (p1.age < p2.age) {
  //       //   console.log(`${p1.name} is older than ${p2.name}`);
  //       // }
  //       if (this.age < other.age) {
  //         return `${other.name} is older than ${this.name}`;
  //       } else if (this.age > other.age) {
  //         return `${other.name} is younger than ${this.name}`;
  //       } else {
  //         return `${other.name} is same age as ${this.name}`;
  //       }
  //     }
  //   }
  //   var p1 = new Person("Samuel", 24);
  //   var p2 = new Person("Joel", 36);
  //   var p3 = new Person("Lily", 24);
  //   if (p2.age > p1.age) {
  //     console.log(`${p2.name} is older than ${p1.name}`);
  //   } else {
  //     console.log(`${p2.name} is not older than ${p1.name}`);
  //   }

  //   // console.log(p1.compareAge(p2));
  //   // console.log(p2.compareAge(p3));
  //   // console.log(p1.compareAge(p3));
  //   var nums = [2, 7, 11, 15];
  //   var target = 9;
  //   function sum(nums, target) {
  //     for (var i = 0; i < nums.length; i++) {}
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }

  //   sum(nums, target);
  // }, []);

  return (
    <div className="grid grid-flow-row gap-2 grid-cols-2 border border-black p-7">
      <div className="grid grid-flow-col grid-rows-3  bg-fuchsia-600 gap-7">
        <div className="">hello</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
        <div>1</div>
      </div>
      <div className="flex flex-row bg-red-900 gap-4">
        <div className="">hello</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
        <div>1</div>
      </div>
      <div className="flex flex-row bg-red-900 gap-4">
        <div className="">hello</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
        <div>1</div>
      </div>
      <div className="flex flex-row bg-red-900 gap-4">
        <div className="">hello</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
        <div>1</div>
      </div>
      <div className="flex flex-row bg-red-900 gap-4">
        <div className="">hello</div>
        <div className="">1</div>
        <div className="">1</div>
        <div className="">1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default Practise;
