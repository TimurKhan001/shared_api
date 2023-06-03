const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    en: {
      type: String,
      required: true
    },
    cs: {
      type: String,
      required: true
    }
  },
  category: {
    type: String,
    required: true,
    enum: ["Interior", "Exterior", "Workplace + Interiors", "Commercial"],
  },
  year: {
    type: Number,
  },
  mainPicture: {
    type: String,
    required: true,
  },
  description: {
    en: {
      type: String,
      required: true,
    },
    cs: {
      type: String,
      required: true,
    }
  },
  gallery: {
    type: [String],
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
