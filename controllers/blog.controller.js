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


exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(400).json({
                success: false,
                message: "Blog not found by given id"
            })
        }

        const updatedRes = await Blog.findByIdAndUpdate(id, req.body);
        console.log(updatedRes);
        res.status(200).json({
            success: true,
            message: "Successfully updated the blog",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something broken"
        })
    }
}