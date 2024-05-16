import React, { useState } from "react";

const PractiseForm = () => {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [data] = useState(formData);
  function getVal(e) {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }
  function formHandle(e) {
    e.preventDefault();
    const myObj = JSON.stringify(formData);
    console.log(myObj);
    localStorage.setItem("identity", myObj);
    console.log(formData);
  }

  const obj = {
    name: "naveen",
    fatherName: "Ramalingam D",
    country: "India",
  };

  // const parObj = JSON.parse(myObj);
  // console.log(parObj);
  return (
    <form
      className=" flex flex-col gap-[10px]"
      onLoad={() => console.log("hi")}
      onSubmit={formHandle}
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={getVal}
        className=" placeholder:pl-1 border-black border-[1px] text-black"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={getVal}
        className=" placeholder:pl-1 border-black border-[1px]"
        placeholder="E-mail"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={getVal}
        placeholder="description"
        className=" placeholder:pl-1 border-black border-[1px]"
      />
      <button type="submit" className=" bg-green-400">
        submit
      </button>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.description}</p>
    </form>
  );
};

export default PractiseForm;
