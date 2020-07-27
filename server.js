//Require packages
const express = require("express");
const mongoose = require("mongoose");

//select port
const PORT = process.env.PORT || 3000;

//set up app with express
const app = express();

//express code to use json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//express code to serve up public folder
app.use(express.static("public"));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
});

//port connection
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
