const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Connected");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.status(200).send(req.body);
});

// app.get("/submit", (req, res) => {
//   const { name, email, description } = req.body;
//   res.status(200).send(req.body);
// });

app.listen(PORT, () => {
  console.log(`Backend Run Successfully ${PORT}`);
});
