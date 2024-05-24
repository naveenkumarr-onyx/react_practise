import axios from "axios";
import React, { useEffect, useState } from "react";

const PractiseForm = () => {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [responseData, setResponseData] = useState([]);

  function getVal(e) {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }
  async function formHandle(e) {
    e.preventDefault();
    let formDataList = localStorage.getItem("identity");

    // let formDataList = existingData ? JSON.parse(existingData) : [];
    // formDataList.push(formData);
    // localStorage.setItem("identity", JSON.stringify(formDataList));
    // console.log(JSON.stringify(formDataList));
    try {
      const response = await axios.post(
        "http://localhost:8000/submit",
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  }

  return (
    <form className="flex flex-col gap-[10px]" onSubmit={formHandle}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={getVal}
        className="placeholder:pl-1 border-black border-[1px] text-black"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={getVal}
        className="placeholder:pl-1 border-black border-[1px]"
        placeholder="E-mail"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={getVal}
        placeholder="description"
        className="placeholder:pl-1 border-black border-[1px]"
      />
      <button type="submit" className="bg-green-400">
        submit
      </button>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.description}</p>
    </form>
  );
};

export default PractiseForm;
