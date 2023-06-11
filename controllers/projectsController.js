const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find({});
  res.send(projects);
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  res.send(project);
};
