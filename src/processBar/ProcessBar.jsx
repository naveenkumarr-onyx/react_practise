import React, { useState } from "react";
import "../App.css";
import InputCompo from "./InputCompo";
export const ProcessBar = () => {
  return (
    <div className=" bg-red-400 flex h-[200px] justify-center items-center">
      {/* <div className=" flex flex-col gap-2">
        <div className=" flex items-center">
          <div className=" bg-green-300 rounded-full w-[20px] h-[20px] flex justify-center items-center">
            1
          </div>
          <div className=" bg-green-300 h-[3px] w-[100px]"></div>
        </div>
        <h1 className="text-green-400">Payments</h1>
      </div> */}

      {/* <InputCompo newVal={State} /> */}
    </div>
  );
};
// export const Amazon = ({ currentStep }) => {
//   const steps = ["Processing", "Dispatch", "Payment"];
//   return (
//     <div className="progress">
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           className={`step ${index <= currentStep ? "active" : ""}`}
//         >
//           {step}
//         </div>
//       ))}
//     </div>
//   );
// };

// export const Apps = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   return (
//     <div className="app">
//       <h1>eCommerce Progress Bar</h1>
//       <Amazon currentStep={currentStep} />
//       <button onClick={handleNextStep} disabled={currentStep === 2}>
//         Next Step
//       </button>
//     </div>
//   );
// };
