const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=-

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=-
// Routes
app.use("/", require("./routes/fastenerRoute"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=-

// Sync the database
const db = require("./models/fastenerModel");
const { Model } = require("sequelize");
db.sequelize.sync().then(() => {
    console.log("Synced db.");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

