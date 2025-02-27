import mongoose from "mongoose"

const URI = "mongodb://127.0.0.1:27017/npl4"

const connectDb = async()=>{
    try {
       await mongoose.connect(URI);
       console.log("Database connected") 
    } catch (error) {
        console.log("Database not connected")
    }
}

export default connectDb;