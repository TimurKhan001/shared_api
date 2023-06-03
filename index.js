const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Project = require("./models/project");
require("dotenv").config();

const connectString = process.env.MONGO_ADDRESS;

mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

const port = 8000;

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/projects", async (req, res) => {
  const projects = await Project.find({});
  res.send(projects);
});

app.get("/projects/:id", async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.send(project);
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
