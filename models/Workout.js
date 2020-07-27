//use mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a workoutSchema
const WorkoutSchema = new Schema({
    //first field is the day that the workout is on (default is now)
  day: {
    type: Date,
    default: Date.now,
  },
  //second field is a reference to exercises
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});
//set the model and export it
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
