const path = require("path");

//html routes
module.exports = function (app) {
    //serve the index.html when loading /
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //serve the stats.html when loading /stats
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  //serve the exercise.html when loading exercise
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
