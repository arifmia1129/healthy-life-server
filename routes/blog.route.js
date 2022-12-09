const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blog.controller");


router.route("/")
    .get(blogControllers.getBlog)
    .post(blogControllers.createBlog)

router.route("/:id")
    .get(blogControllers.getSingleBlog)
    .patch(blogControllers.updateBlog)
    .delete(blogControllers.deleteBlog)

module.exports = router;