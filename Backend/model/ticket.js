import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
});

const ticket = mongoose.model("Ticket", ticketSchema);
export default ticket;
