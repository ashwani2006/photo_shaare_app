import express from "express" 
import router from "./routers/auth_routers.js";
import connectDb from './config/auth_config.js';
import cookieParser from "cookie-parser";
import  cors from "cors";
import dotenv from "dotenv"
dotenv.config()


const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

// ✅ Increase JSON & URL-encoded payload limit (100MB)
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(cookieParser());
app.use("/auth/api",router);


connectDb();
app.listen((process.env.PORT), ()=>{
    console.log("server is running");
})