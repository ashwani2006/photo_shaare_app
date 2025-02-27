import Post from "../../models/posts_models.js";

const gets = async(req, res) =>{
    try {
       const posts = await Post.find().sort({createdAt: -1});

        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg:"error on geting post"});
    }
}

export default gets;