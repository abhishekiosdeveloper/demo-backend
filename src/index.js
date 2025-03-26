import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
path: './env'
})
connectDb()

// (async () =>{
//     try {
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
//      app.on("error", ()=> {
//      console.log("Error",error)
//      throw error
//      })
//       )
//       app.listen(process.env.PORT, () => {
//         console.log(`app is listion port ${process.env.PORT}`)
//       })
//     } catch (error) {
//     console.error("Error", error)
//     }
// })()