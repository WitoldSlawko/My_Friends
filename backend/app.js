const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const config = JSON.parse(require('./config/database'));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.database);

var db = mongoose.connection;

db.on('error', function (error) {
  console.log("!!! DATABASE CONNECTION ERROR " + error.toString());
});

app.use((req, res, next) => {
    res.send('Response sent!');
});

module.exports = app;
