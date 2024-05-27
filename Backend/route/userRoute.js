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
export default route;
