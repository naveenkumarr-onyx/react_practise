import axios from "axios";
import React, { useEffect, useState } from "react";

const PractiseForm = () => {
  const [formData, setForm] = useState({
    name: "",
    email: "",
  });
  const [isFormValid, setFormValid] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  function getVal(e) {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }

  useEffect(() => {
    setFormValid(formData.name !== "" && formData.email !== "");
    fetchAllUsers();
  }, [formData]);

  async function formHandle(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/submit", formData);
      alert("User added Successfully");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  }
  async function fetchAllUsers() {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      setAllUsers(response.data.users);
    } catch (error) {
      console.error(" oops!No users found", error);
    }
  }

  return (
    <form
      className="flex flex-col gap-[10px] lg:w-[200px] max-md:w-[200px] focus:outline-none"
      onSubmit={formHandle}
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={getVal}
        className="placeholder:pl-3 border-black border-[1px] text-black focus:outline-none"
      />
      {formData.name && (
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={getVal}
          className="placeholder:pl-3 border-black border-[1px] focus:outline-none"
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
      {allUsers && (
        <table className=" border-collapse border border-black sm:w-[200px]">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((value, index) => (
              <tr key={index}>
                <td className="border border-black p-3">{value.name}</td>
                <td className="border border-black">{value.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </form>
  );
};

export default PractiseForm;
