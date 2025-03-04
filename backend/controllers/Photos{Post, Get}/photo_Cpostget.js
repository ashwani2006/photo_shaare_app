import Post from "../../models/posts_models.js";

const gets = async (req, res) => {
    try {
        // Get current page and limit from query params
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        // Calculate skip value for pagination
        const skip = (page - 1) * limit;

        // Fetch posts with pagination
        const posts = await Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit);

        res.status(200).json(posts);  // Return posts
    } catch (error) {
        res.status(400).json({ msg: "Error on getting posts", error: error.message });
    }
}

export default gets;
