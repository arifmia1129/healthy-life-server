const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server working successfully"
    })
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