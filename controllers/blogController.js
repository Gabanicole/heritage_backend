// desc get BLOGS
//ACCESS PUBLIC
const getBlogs = (req,res) => {
 res.status(200).json({message:"Get all blogs"})
}

// desc create blog
//ACCESS PUBLIC
const createBlogs = (req,res) => {
 res.status(200).json({message:"Create blog"})
}

// desc create blog
//ACCESS PUBLIC
const getBlog = (req,res) => {
 res.status(200).json({message:`Get information of Blog for ${req.params.id}`})
}

// desc update blog
//ACCESS PUBLIC
const updateBlog =(req,res) => {
 res.status(200).json({message:`Update blog for ${req.params.id}`})
}

// desc update blog
//ACCESS PUBLIC
const deleteBlog = (req,res) => {
 res.status(200).json({message:`Delete blog for ${req.params.id}`})
}

module.exports = {getBlogs,createBlogs, getBlog, updateBlog, deleteBlog}