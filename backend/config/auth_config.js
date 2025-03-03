import mongoose from "mongoose"

const URI = "mongodb+srv://mydb:amoeba%231@amoeba.zxfbb.mongodb.net/?retryWrites=true&w=majority&appName=Amoeba";

const connectDb = async()=>{
    try {
       await mongoose.connect(URI);
       console.log("Database connected") 
    } catch (error) {
        console.log("Database not connected")
    }
}

export default connectDb;