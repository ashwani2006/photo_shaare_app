import jwt from "jsonwebtoken"

const me = async(req, res) =>{
    try {
        const token = req.cookies.token;

        const decoded = jwt.verify(token, "your_secret_key");

       
        res.status(200).json({ username: decoded.username });
    } catch (error) {
        res.status(400).json({msg:"error || getting username"})
    }
}

export default me;