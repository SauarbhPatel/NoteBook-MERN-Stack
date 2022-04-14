const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  work: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "-",
  },
  site: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  skil_1: {
    type: String,
    default: "",
  },
  skil_1_p: {
    type: Number,
    default: null,
  },
  skil_2: {
    type: String,
    default: "",
  },
  skil_2_p: {
    type: Number,
    default: null,
  },
  skil_3: {
    type: String,
    default: "",
  },
  skil_3_p: {
    type: Number,
  },
  skil_4: {
    type: String,
    default: "",
  },
  skil_4_p: {
    type: Number,
    default: null,
  },
  skil_5: {
    type: String,
    default: "",
  },
  skil_5_p: {
    type: Number,
    default: null,
  },
  skil_6: {
    type: String,
    default: "",
  },
  skil_6_p: {
    type: Number,
    default: null,
  },
  skil_7: {
    type: String,
    default: "",
  },
  skil_7_p: {
    type: Number,
    default: null,
  },
  skil_8: {
    type: String,
    default: "",
  },
  skil_8_p: {
    type: Number,
    default: null,
  },
  skil_9: {
    type: String,
    default: "",
  },
  skil_9_p: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model("usersdetail", UserSchema);
