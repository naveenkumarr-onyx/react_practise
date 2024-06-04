import React, { useEffect, useState } from "react";
import RaisedTicket from "./RaisedTicket";
import axios from "axios";

const Ticket = () => {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    createdBy: "",
    priority: "All",
  });
  const [tickets, setTickets] = useState([]);
  const [formValidated, setFormValidated] = useState(false);

  // const postTickets = async () => {};

  useEffect(() => {
    setFormValidated(
      formData.title !== "" &&
        formData.description !== "" &&
        formData.createdBy !== "" &&
        formData.priority !== ""
    );
  }, [formValidated, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/ticket", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-[20px] px-1">
      <div>
        <h1 className="text-xl text-[300] font-bold">
          Ticket Raising Platform
        </h1>
        <form className=" flex flex-col px-2 gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              name="title"
              id=""
              placeholder="title"
              value={formData.title}
              onChange={handleInputChange}
              className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Description:</label>
            <input
              type="text"
              name="description"
              id=""
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Created By:</label>
            <input
              type="text"
              name="createdBy"
              value={formData.createdBy}
              placeholder="Enter Employee ID"
              onChange={handleInputChange}
              className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <label htmlFor="">Priority</label>
            <select
              className="p-2 border border-black focus:outline-none"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!formValidated}
            className={`ml-2 w-[100px] text-white bg-green-600 p-2 ${
              formValidated
                ? " bg-green-600 cursor-pointer"
                : " bg-red-600 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      <Filters />
      <RaisedTicket />
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="flex flex-col gap-[30px] px-1">
      <h1 className="text-xl text-[300] font-bold">FILTERS AND SEARCH</h1>
      <div className=" px-2">
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Priority</label>
          <select className="p-2 border border-black focus:outline-none">
            <option value="">All</option>
            <option value="">Open</option>
            <option value="">In Progress</option>
            <option value="">Resolved</option>
          </select>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="">Priority</label>
          <select className="p-2 border border-black focus:outline-none">
            <option value="">Low</option>
            <option value="">Medium</option>
            <option value="">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Search</label>
          <input
            type="search"
            name=""
            id=""
            className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
