import express from "express";
import connectDb from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./route/userRoute.js";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
connectDb();

// app.use("/", (req, res) => {
//   res.send("hi");
// });

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Backend Run Successfully ${PORT}`);
});
