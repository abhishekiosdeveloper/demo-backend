import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
path: './env'
})
connectDb(process.env.PORT || 8000, ()=> {
    console.log(`server is running on ${process.env.PORT}`)
})
.then(()=> {
    app.listen
})
.catch((err)=>{
console.log("the connection is failed",err)
})
