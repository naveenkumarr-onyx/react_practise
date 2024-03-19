import React, { useState } from "react";

const SignUpForm = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className=" flex flex-col gap-[5px] bg-violet-200 p-[20px]">
      <div>
        <h1>{action === "Login" ? "SignUpForm" : "LoginInForm"}</h1>
      </div>
      <div className=" flex flex-col gap-[10px]">
        {action === "signUp" ? (
          <>
            <input
              type="email"
              placeholder="Enter ur E-mail"
              className=" focus:outline-none border-[1px] "
            />
            <input
              type="password"
              placeholder="Enter ur Password"
              className=" focus:outline-none border-[1px] "
            />
          </>
        ) : (
          <div className=" flex flex-col gap-[10px]">
            <input
              type="text"
              placeholder="Enter ur name"
              className=" focus:outline-none border-[1px] "
            />
            <input
              type="email"
              placeholder="Enter ur E-mail"
              className=" focus:outline-none border-[1px] "
            />
            <input
              type="password"
              placeholder="Enter ur Password"
              className=" focus:outline-none border-[1px] "
            />
          </div>
        )}
      </div>
      <div className=" flex gap-[5px]">
        <button
          onClick={() => {
            setAction("signUp");
          }}
          className={` ${
            action === "Login" ? "bg-blue-400" : "bg-white"
          } p-[5px]`}
        >
          Signup
        </button>
        <button
          onClick={() => {
            setAction("Login");
          }}
          className={` ${
            action === "signUp" ? "bg-blue-400" : "bg-white"
          } p-[5px]`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
