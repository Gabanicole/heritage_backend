const express = require ('express')
const router = express.Router();

const {getBlogs, createBlogs, getBlog, updateBlog, deleteBlog} = require("../controllers/blogController")

router.route( "/").get(getBlogs).post (createBlogs);

router.route( "/:id").get(getBlog).put(updateBlog).delete(deleteBlog);



module.exports = router;