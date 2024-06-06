import React, { useEffect, useState } from "react";
import RaisedTicket from "./RaisedTicket";
import axios from "axios";

const Ticket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdBy: "",
    search: "",
    priority: "All",
  });
  const [tickets, setTickets] = useState([]);
  const [formValidated, setFormValidated] = useState(false);
  const [filters, setFilters] = useState({
    status: "All",
    priority: "All",
  });
  const [charactersLeft, setCharactersLeft] = useState(400);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/get/ticket");
      setTickets(response.data.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

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

    if (name === "description") {
      var character = 500 - value.length;
      setCharactersLeft(character);
      if (character < 0) {
        alert(
          "Description exceeds the maximum allowed length of 500 characters."
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ticket",
        formData
      );
      setTickets([...tickets, response.data.data]);
      alert("Ticket Created Successfully");
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
        console.log(id);
        setTickets(tickets.filter((ticket) => ticket._id !== id));
        alert("Ticket deleted successfully");
      } catch (error) {
        console.error("Error deleting ticket:", error);
      }
    }
  };

  const handleInputSearch = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async (query) => {
    const searchQuery = query.toLowerCase().trim();
    if (searchQuery !== "") {
      const searchTickets = tickets.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(query) ||
          ticket.description.toLowerCase().includes(query) ||
          ticket.createdBy.toLowerCase().includes(query) ||
          ticket.priority.toLowerCase().includes(query)
      );
      setTickets(searchTickets);
    } else {
      fetchTickets();
    }
  };

  const filterTickets = tickets.filter((ticket) => {
    const statusTickets =
      filters.status === "All" ? true : ticket.status === filters.status;
    const priorityTickets =
      filters.priority === "All" ? true : ticket.priority === filters.priority;

    return statusTickets && priorityTickets;
  });

  return (
    <div className="flex flex-col gap-[20px] px-1">
      <div>
        <h1 className="text-xl text-[300] font-bold">
          Ticket Raising Platform
        </h1>
        <form
          className="flex flex-col px-2 gap-4 w-[400px] mt-3"
          onSubmit={handleSubmit}
        >
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
            <textarea
              cols="10"
              rows="5"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className=" resize-y focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            ></textarea>
            <h3 className="italic font-thin text-[10px]">
              {charactersLeft} character left
            </h3>
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
      {/* Filters And Search */}
      <div className="flex flex-col gap-[30px] px-1 w-[400px]">
        <h1 className="text-xl text-[300] font-bold">FILTERS AND SEARCH</h1>
        <div className="px-2">
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="status">Status</label>
            <select
              className="p-2 border border-black focus:outline-none"
              name="status"
              value={filters.status}
              onChange={handleInputSearch}
            >
              <option value="All">All</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="priority">Priority</label>
            <select
              className="p-2 border border-black focus:outline-none"
              name="priority"
              value={filters.priority}
              onChange={handleInputSearch}
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="search">Search</label>
            <input
              value={formData.search}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  search: e.target.value,
                });
                handleSearch(e.target.value);
              }}
              type="search"
              className="focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
            />
          </div>
        </div>
      </div>
      <div>
        <RaisedTicket
          data={tickets}
          onDelete={handleTicketDelete}
          filterTickets={filterTickets}
        />
      </div>
    </div>
  );
};

export default Ticket;
