const db = require("../models");
module.exports = function (app) {
  //get /api/workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //put /api/workout/:id
  app.put("/api/workouts/:id", (req, res) => {
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

  //post /api/workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({ exercises: [req.body] })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //get /api/workout/range
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
