import mongoose from "mongoose" 

const profileSchema = new mongoose.Schema({
   username:{type:String},
   email:{type:String},
   age:{type:Number},
   gender:{type:String, enum:["male", "female"]},
})

const Profile = new mongoose.model("Profile", profileSchema);

export default Profile;