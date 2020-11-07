
//Reference required module
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require route file
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});