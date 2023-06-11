const express = require("express");
const app = express();
const projectRoutes = require('./routes/projectRoutes');
require("dotenv").config();

const db = require('./config/db');

const port = 8000;

db.connect();

app.get("/", (req, res) => {
  res.send("hello there");
});

app.use("/projects", projectRoutes);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
