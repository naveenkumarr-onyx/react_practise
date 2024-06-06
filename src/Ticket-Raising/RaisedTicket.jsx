import axios from "axios";
import React from "react";

const RaisedTicket = ({ onDelete, filterTickets }) => {
  const handleTicketDelete = async (id) => {
    if (window.confirm("Do you really want to Delete?")) {
      try {
        await axios.delete(`http://localhost:8000/api/delete/${id}`);
        onDelete(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-xl text-[300] font-bold">TICKETS</h1>
      <div className="m-3 flex flex-row gap-3 rounded-sm ">
        {filterTickets ? (
          <>
            {filterTickets.map((ticket, index) => (
              <div
                key={index}
                className={` max-w-[300px] p-3 flex flex-col gap-2 ${
                  ticket.priority === "Low"
                    ? "bg-violet-400"
                    : ticket.priority === "Medium"
                    ? "bg-yellow-200"
                    : ticket.priority === "High"
                    ? "bg-red-200"
                    : "bg-green-200"
                }`}
              >
                <h1 className="font-bold">{ticket.title}</h1>
                <p className="font-semibold">
                  {ticket.description || "No description provided"}
                </p>
                <h2>Created by: {ticket.createdBy || "Unknown"}</h2>
                <p>Priority: {ticket.priority || "Not set"}</p>
                <div className="flex flex-col gap-2">
                  <label htmlFor={`priority-${index}`}>Update Priority</label>
                  <select
                    id={`priority-${index}`}
                    className="p-2 focus:outline-none"
                  >
                    <option>{ticket.priority}</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="p-2 text-white bg-red-400"
                  onClick={() => handleTicketDelete(ticket._id)}
                >
                  Delete Ticket
                </button>
              </div>
            ))}
          </>
        ) : (
          <div>No tickets available</div>
        )}
      </div>
    </div>
  );
};

export default RaisedTicket;
