import express from "express";
import ticket from "../model/ticket.js";
// import ticketContoller from "../controller/ticketController.js";
const route = express.Router();

// route.post("/submit", async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     const newUser = new user({
//       name,
//       email,
//     });
//     await newUser.save();
//     res
//       .status(201)
//       .json({ message: "Form Submitted Successfully", data: req.body });
//   } catch (error) {
//     res.status(500).json({
//       message: error,
//     });
//   }
// });

// route.get("/users", async (req, res) => {
//   try {
//     const users = await user.find({});
//     res.status(200).json({ users });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
// route.delete("/delete-user/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const users = await user.findByIdAndDelete(userId);
//     if (!users) {
//       return res.status(404).json({
//         message: "User Not Found",
//       });
//     }
//     res.status(200).json({
//       message: "User Deleted Succesfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

// Ticket Raising;
route.post("/ticket", async (req, res) => {
  const { title, description, priority, createdBy } = req.body;
  const newTicket = new ticket({
    title,
    description,
    priority,
    createdBy,
  });
  try {
    await newTicket.save();
    res.status(200).json({
      message: "Ticket Created Successfully",
      data: newTicket,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

route.get("/get/ticket", async (req, res) => {
  try {
    const getTicket = await ticket.find({});
    res.status(200).json({
      data: getTicket,
    });
    // res.json(getTicket);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ticket.findByIdAndDelete(id);
    res.status(200).json({
      message: "Ticket Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
export default route;
