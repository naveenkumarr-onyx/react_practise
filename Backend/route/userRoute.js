import express from "express";
import user from "../model/user.js";
const route = express.Router();

route.post("/submit", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new user({
      name,
      email,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Form Submitted Successfully", data: req.body });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

route.get("/users", async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
route.delete("/delete-user", async (req, res) => {
  try {
    const userId = req.body._id;
    const users = await user.findByIdAndDelete(userId);
    if (!users) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      message: "User Deleted Succesfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
export default route;
