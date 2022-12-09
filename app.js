const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("./config/dbConnect");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).send("Routes working")
})

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something is broken"
    })
})

module.exports = app;