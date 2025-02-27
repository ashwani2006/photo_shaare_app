import Profile from "../../models/profile_models.js";

const profileUp = async(req, res) =>{
    const {username, email, age, gender} = req.body;
     try {
        await Profile.create({username, email, age, gender}); 
        res.status(200).json({msg:"profile successfully uploaded"});
     } catch (error) {
        res.status(400).json({msg:"profile uploaded error"});
     }
}

export default profileUp;