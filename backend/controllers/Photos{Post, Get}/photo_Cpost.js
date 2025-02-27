import Post from "../../models/posts_models.js";

const posts = async(req, res) =>{
     try {
        const {username, image, caption} = req.body;

        await Post.create({username, image, caption});

        res.status(200).json({msg:"photo post successfully"});
     } catch (error) {
        res.status(400).json({msg:"error on post upload"})
     }
}

export default posts;