import Post from "../../models/posts_models.js";

const gets = async (req, res) => {
    try {
        // Optimized Query with Pagination, Field Selection, and Sorting
        const page = parseInt(req.query.page) || 1;  // Get page number from query params (default is 1)
        const limit = parseInt(req.query.limit) || 10;  // Get limit number from query params (default is 10)

        // MongoDB Query Optimizations:
        // 1. `.select()` - Fetch only required fields to reduce data size.
        // 2. `.sort()` - Sort by `createdAt` in descending order to show recent posts first.
        // 3. `.skip()` and `.limit()` - Implement pagination to only fetch a limited number of posts per request.
        const posts = await Post.find()
            .select('title content createdAt')  // Select only the necessary fields (for smaller payloads)
            .sort({ createdAt: -1 })  // Sort by createdAt (desc) to show latest posts first
            .skip((page - 1) * limit)  // Skip the posts based on the page number
            .limit(limit);  // Limit the number of posts fetched

        // Send the response with optimized posts
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ msg: "Error on getting posts", error: error.message });
    }
}

export default gets;
