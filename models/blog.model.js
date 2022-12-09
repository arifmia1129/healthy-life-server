const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: {
            values: ["pain", "mind & mood", "men's health", "women's health", "diseases", "heart health", "general"],
            message: "Category invalid"
        },
        default: "general"
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedDate: {
        type: Date,
        default: new Date()
    }
})


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;