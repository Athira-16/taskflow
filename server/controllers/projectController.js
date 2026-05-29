const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const project = await Project.create({
    ...req.body,
    user: req.user.id,
  });

  res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(project);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
