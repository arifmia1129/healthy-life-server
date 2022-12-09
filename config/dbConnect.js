const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/healthy-life")
    .then(() => {
        console.log("Database connected!")
    })
    .catch((error) => {
        console.log(error.message);
    })