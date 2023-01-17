const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    require: true
  },
  password: String,
  downloadCount: {
    type: Number,
    default: 0
  }
});

module.exports = new mongoose.model("FileInfo", schema);
