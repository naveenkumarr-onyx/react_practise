import ticket from "../model/ticket.js";

const ticketContoller = async (req, res) => {
  const { title, description, priority, createdBy } = req.body;
  try {
    const newTicket = new ticket({
      title,
      description,
      priority,
      createdBy,
    });
    await newTicket.save();
    res.status(200).json({
      message: "Ticket Created Successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
export default ticketContoller;
