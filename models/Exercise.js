//use mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create exercise schema
const ExerciseSchema = new Schema({
    //type is either resistance or cardio
  type: {
    type: String,
    enum: ["resistance", "cardio"],
    require: "Type is Required",
  },
  //name of the exercise
  name: {
    type: String,
    trim: true,
    require: "Name is required",
    minlength: 1,
  },
  //weights if resistance
  weight: {
    type: Number,
    require: false,
  },
  //reps if resistance
  reps: {
    type: Number,
    require: false,
  },
  //sets if resistance
  sets: {
    type: Number,
    require: false,
  },
  //duration for either resistance or cardio
  duration: {
    type: Number,
    require: false,
  },
  //distance for either resistance or cardio
  distance: {
    type: Number,
    require: false,
  },
});
//export the model
const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;