import React from "react";
import RaisedTicket from "./RaisedTicket";

const Ticket = () => {
  return (
    <div className="flex flex-col gap-[20px] ">
      <h1 className="text-xl text-[300] font-bold">Ticket Raising Platform</h1>
      <div className=" flex flex-col p-2 gap-4 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="title"
            //   value=""
            className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            name=""
            id=""
            value=""
            placeholder="Description"
            className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Created By:</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Employee ID"
            value=""
            className=" focus:outline-none border p-1 border-black bg-transparent placeholder:p-1"
          />
        </div>
        <div className=" flex flex-col gap-[10px]">
          <label htmlFor="">Priority</label>
          <select className="p-2 border border-black focus:outline-none">
            <option value="">All</option>
            <option value="">Low</option>
            <option value="">Medium</option>
            <option value="">High</option>
          </select>
        </div>
      </div>
      <button
        type="button"
        className=" ml-2 w-[100px] text-white bg-green-600 p-2"
      >
        Submit
      </button>
      <RaisedTicket />
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h1 className="text-xl text-[300] font-bold">FILTERS AND SEARCH</h1>
      <div className="">
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
