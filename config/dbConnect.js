const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(config.db.url)
    .then(() => {
        console.log("Database connected!")
    })
    .catch((error) => {
        console.log(error.message);
    })