const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blog.controller");


router.route("/")
    .get(blogControllers.getBlog)
    .post(blogControllers.createBlog)

module.exports = router;