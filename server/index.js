const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json())
    .catch((err) => res.json(err));
  const data = req.body;
});
app.listen(3001, () => {
  console.log("server is runnig on port 3001");
});
