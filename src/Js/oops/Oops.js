import React, { useEffect } from "react";

const Oops = () => {
  useEffect(() => {
    function oProgram(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = () => {
        return this.firstName + " " + this.lastName;
      };
    }
    let create = new oProgram("naveen", "Kumar");
    console.log(create.fullName());
  });

  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   this.describe = function () {
  //     return this.name + "," + this.age + " years old ";
  //   };
  // }

  // function Person(firstName, lastName) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.fullName = this.firstName + "" + this.lastName;
  //   Person.prototype.describe = () => {
  //     return this.fullName;
  //   };
  // }
  // let person = new Person("naveen", "Kumar");

  // Inheritance
  var Person = function () {};
  Person.prototype.initial = function (name, age) {
    this.name = name;
    this.age = age;
    this.describe = () => {
      return this.name + "age is " + this.age;
    };
  };
  var Student = function () {};
  Student.prototype = new Person();
  Student.prototype.learn = function (subject) {
    return (
      this.describe +
      " just learn " +
      subject +
      "age is " +
      this.age +
      "years old"
    );
  };
  var me = new Student();
  me.initial("John", 25);
  me.learn("Inheritance");
  // console.log(me);

  // destructuring
  const obj = {
    head: {
      eyes: "x",
      mouth: {
        teeth: "x",
        tongue: "x",
      },
    },
    body: {
      shoulders: "x",
      chest: "x",
      arms: "x",
      hands: "x",
      legs: "x",
    },
  };
  let computer = {
    processor: {
      transistor: {
        silicon: {
          thickness: "9nm",
        },
      },
    },
  };
  const { thickness: thick } = computer.processor.transistor.silicon;
  console.log(thick);

  return <div>Oops</div>;
};

export default Oops;
