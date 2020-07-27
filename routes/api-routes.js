const db = require("../models");
module.exports = function (app) {
  //get route for /api/workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //put route for /api/workout/:id
  app.put("/api/workouts/:id", (req, res) => {
      //finds the location of the workout and pushes a new exercise in
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //post route for /api/workout
  app.post("/api/workouts", (req, res) => {
      //creates a new workout with an exercise
    db.Workout.create({ exercises: [req.body] })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //get route for /api/workout/range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
