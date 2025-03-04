import User from "../../models/auth_models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login  = async (req, res) =>{
    try {
        const {username, password} = req.body;

        // check user found or not 
        const userEx = await User.findOne({username});
        if(!userEx)  return res.status(401).json({msg:"username not found"})

       // compare the password is right or not
        const checkPs = await bcrypt.compare(password, userEx.password);
        if(!checkPs) return  res.satatus(402).json({msg:"password invalid"})

       //genrate token
       const token = jwt.sign({id:userEx._id, username:userEx.username},'your_secret_key');
       
       //send the token to client-side
       res.cookie("token",token,{httpOnly:true, secure:true,  sameSite: 'None'});
       
        res.status(200).json({msg:"you are login successfully"})
    } catch (error) {
        res.status(400).json({msg:"error || login controllers"})
    }
}

export default login;
