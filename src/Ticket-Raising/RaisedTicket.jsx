import React from "react";

const RaisedTicket = () => {
  return (
    <div className="">
      <h1 className="text-xl text-[300] font-bold">TICKETS</h1>{" "}
      <div className="m-3 max-w-[300px] rounded-sm">
        <div className=" bg-green-200 p-3 flex flex-col gap-2">
          <p className=" font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusamus, tempora architecto voluptatem placeat libero tenetur
            magnam numquam perferendis quasi molestiae minus fuga modi magni
            error voluptates nisi omnis! Explicabo?
          </p>
          <h2>(created by: John)</h2>
          <p>Priority : Low</p>
          <div className=" flex flex-col gap-2">
            <label htmlFor="">Update Priority</label>
            <select name="" id="" className=" p-2 focus:outline-none">
              <option value="">Low</option>
              <option value="">Medium</option>
              <option value="">High</option>
            </select>
          </div>
          <button type="button" className="p-2 text-white bg-red-400">
            Delete Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaisedTicket;
