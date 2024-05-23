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
  const { name, email, description } = req.body;
  console.log(name, email, description);
  res.status(200).send("Form data received successfully");
  //   if (res.statusCode === 200) {
  //     console.log("Form data received successfully");
  //   } else {
  //     console.log("Form data got 404");
  //   }
});

app.listen(PORT, () => {
  console.log(`Backend Run Successfully ${PORT}`);
});
