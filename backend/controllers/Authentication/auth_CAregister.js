import User from "../../models/auth_models.js";
import bcrypt from "bcryptjs"


const register  = async (req, res) =>{
    try {
        const {username, password} = req.body;

        // check the user exist
        const userEx = await User.findOne({username});
        if(userEx)  return  res.status(400).json({msg:"username already exist"})

        // hashed the password
        const hashed_ps = await bcrypt.hash(password,10);


       // username and password created in database
        await User.create({username, password:hashed_ps});

        res.status(200).json({msg:"you are register successfully"})
    } catch (error) {
        res.status(400).json({msg:"error || in register page"})
    }
}

export default register;