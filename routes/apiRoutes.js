var dbData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
let jsonFilePath = path.join(__dirname, "../db/db.json");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(dbData);
    });

    app.post("/api/notes", function (req, res) {

        var newNote = req.body;
        let id = 0;
        for (let i = 0; i < dbData.length; i++) {
            if (dbData[i].id > id) {
                id = dbData[i].id;
            }
        }
        newNote.id = id + 1;
        dbData.push(newNote);

        fs.writeFile(jsonFilePath, JSON.stringify(dbData), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Your note was saved!");
        });

        res.json(newNote);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let deleteId = parseInt(req.params.id);
        // console.log(deleted);

        for (let i = 0; i < dbData.length; i++) {

            if (dbData[i].id === deleteId) {
                dbData.splice(i, 1);
            }
        }
        fs.writeFileSync(jsonFilePath, JSON.stringify(dbData), function (err) {

            if (err) {
                return console.log(err);
            } else {
                console.log("Your note was deleted!");
            }
        });
        res.json(dbData);

    })
}