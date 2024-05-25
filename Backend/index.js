import express from "express";
import user from "./model/user.js";
import connectDb from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
connectDb();
app.get("/", (req, res) => {
  res.send("Connected");
});

app.post("/submit", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new user({
      name,
      email,
    });
    await newUser.save();
    res
      .status(200)
      .json({ message: "Form Submitted Successfully", data: req.body });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Run Successfully ${PORT}`);
});
