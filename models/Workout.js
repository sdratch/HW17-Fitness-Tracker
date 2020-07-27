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
  // exercises: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise",
  //   },
  // ],
  exercises: [
    {
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
    },
  ],
});
//set the model and export it
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
