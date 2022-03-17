// set up the mongoose connection
const mongoose = require("mongoose");

// Mongoose connection string
mongoose.connect("mongodb://localhost/bountyhuntersapi");

// shortcut to the database
const db = mongoose.connection;

// event listeners
db.once("open", () => {
    console.log(`connected to mongodb at ${db.host}:${db.port}`);
});

db.on("error", (err) => {
    console.err("DB Error:", err);
});

module.exports.Bounty = require('./bounty'); 