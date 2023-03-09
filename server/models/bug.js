const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BugSchema = new Schema({
  // user: {
  //   type:Types.ObjectId,
  //   ref: 'users',
  // },
  bugname: {
    type: String,
    required: true,
  },
  idle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // team: {
  //   type: String,
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    default: 'Normal',
  },
  status: {
    type: String,
    // default: Non,
  }
});

module.exports = mongoose.model("Bug", BugSchema);
