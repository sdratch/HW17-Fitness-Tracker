const db = require("../models");
module.exports = function (app) {
    
  //get /api/workout
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

//post /api/workout
  app.post("/api/workouts", (req, res) => {

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
