import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"})) 
app.use(express.urlencoded({ extended: true, limit: "16kb" }));;
app.use(express.static("public"))
app.use(cookieParser())

// routes

app.use("/api/v1/users",userRouter);

app.get("/health", (req, res)=>{
    return res.status(200).json({ status: "OK" });
})


export { app } 

