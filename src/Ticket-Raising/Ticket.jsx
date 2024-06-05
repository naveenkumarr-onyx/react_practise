import React, { useEffect, useState } from "react";
import RaisedTicket from "./RaisedTicket";
import axios from "axios";

const Ticket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdBy: "",
    priority: "All",
  });
  const [tickets, setTickets] = useState([]);
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/get/ticket"
        );
        setTickets(response.data.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  useEffect(() => {
    setFormValidated(
      formData.title !== "" &&
        formData.description !== "" &&
        formData.createdBy !== "" &&
        formData.priority !== ""
    );
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ticket",
        formData
      );
      setTickets([...tickets, response.data.data]);

      // Reset the form data
      setFormData({
        title: "",
        description: "",
        createdBy: "",
        priority: "All",
      });
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  const handleTicketDelete = async (id) => {
    if (window.confirm("Do you really want to delete?")) {
      try {
        await axios.delete(`http://localhost:8000/api/ticket/${id}`);
        setTickets(tickets.filter((ticket) => ticket._id !== id));
        alert("Ticket deleted successfully");
      } catch (error) {
        console.error("Error deleting ticket:", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-[20px] px-1">
      <div>
        <h1 className="text-xl text-[300] font-bold">
          Ticket Raising Platform
        </h1>
        <form className="flex flex-col px-2 gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              value={formData.title}
              onChange={handleInputChange}
              className="focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="createdBy">Created By:</label>
            <input
              type="text"
              name="createdBy"
              id="createdBy"
              value={formData.createdBy}
              placeholder="Enter Employee ID"
              onChange={handleInputChange}
              className="focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="priority">Priority</label>
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
            className={`ml-2 w-[100px] text-white p-2 ${
              formValidated
                ? "bg-green-600 cursor-pointer"
                : "bg-red-600 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
      <Filters />
      <RaisedTicket data={tickets} onDelete={handleTicketDelete} />
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="flex flex-col gap-[30px] px-1">
      <h1 className="text-xl text-[300] font-bold">FILTERS AND SEARCH</h1>
      <div className="px-2">
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="status">Status</label>
          <select className="p-2 border border-black focus:outline-none">
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="priority">Priority</label>
          <select className="p-2 border border-black focus:outline-none">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            className="focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
