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


exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({
            success: true,
            message: "Successfully get all blog",
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something broken"
        })
    }
}