const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/script.js", (req, res) => {
  res.setHeader("Content-Type", "application/*");
  res.sendFile(__dirname + "/script.js");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/submit", (req, res) => {
  let jsonData = [];
  fs.readFile("database.json", (err, data) => {
    if (err) {
      res.status(500).send("Error reading db");
    } else {
      jsonData = JSON.parse(data);
    }

    jsonData.push(req.body);

    fs.writeFile(
      "database.json",
      JSON.stringify(jsonData, null, 2) + "\n",
      (err) => {
        if (err) {
          //   console.error(err);
          res.status(500).send("Error saving data");
        } else {
          //   console.log("done");
          res.send("Registration completed");
        }
      }
    );
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
