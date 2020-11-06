

const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")



var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});