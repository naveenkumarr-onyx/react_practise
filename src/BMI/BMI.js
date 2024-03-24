import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState();
  let [height, setHeight] = useState();
  let [bmi, setBmi] = useState();
  let [val, setVal] = useState("");

  function calculatebmi() {
    if (isNaN(height) || isNaN(weight) || weight === 0 || height === 0) {
      alert("Please enter valid numeric data");
    } else {
      height = height / 100;
      bmi = weight / (height * height);
      setBmi(bmi.toFixed(3));
      console.log(bmi);

      if (bmi < 18.5) {
        setVal("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setVal("Normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setVal("Overweight");
      } else {
        setVal("Obesity");
      }
    }
  }
  return (
    <div className=" flex flex-col gap-[10px]">
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className=" bg-red-50 focus:outline-none"
        placeholder="Enter ur weight"
      />
      <input
        type="text"
        className=" bg-red-50 focus:outline-none"
        placeholder="Enter ur Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button className="bg-violet-300" type="submit" onClick={calculatebmi}>
        Calculate BMI
      </button>
      <h1 className={`${bmi > 25 ? "bg-red-700" : "bg-green-700"} text-center`}>
        {val}
      </h1>
      <h1>{bmi}</h1>
    </div>
  );
};

export default BMI;
