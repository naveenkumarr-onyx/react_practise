import axios from "axios";
import React, { useEffect, useState } from "react";

const PractiseForm = () => {
  const [formData, setForm] = useState({
    name: "",
    email: "",
  });
  const [responseData, setResponseData] = useState("");
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(formData.name !== "" && formData.email !== "");
  }, [formData]);

  function getVal(e) {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }
  async function formHandle(e) {
    e.preventDefault();
    console.log("click");
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
      setResponseData(JSON.stringify(response.data));
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
      {formData.name && (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={getVal}
          className="placeholder:pl-1 border-black border-[1px]"
          placeholder="E-mail"
        />
      )}
      <button
        type="submit"
        className="bg-green-400 disabled:bg-red-700 disabled:text-white  disabled:cursor-not-allowed"
        disabled={!isFormValid}
      >
        submit
      </button>
      <p> {responseData && JSON.stringify(responseData.name)}</p>
      {/* <p>{responseData ? responseData.name : "no data found"}</p>
      <p>{responseData && responseData.email}</p> */}
    </form>
  );
};

export default PractiseForm;
