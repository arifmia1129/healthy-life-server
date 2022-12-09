const Blog = require("../models/blog.model")

exports.createBlog = async (req, res) => {
    try {

        try {
            const blog = new Blog(req.body);
            await blog.save();
            res.status(201).json({
                success: true,
                message: "Successfully create the blog"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Couldn't create the blog",
                error: error.message
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something broken"
        })
    }
}