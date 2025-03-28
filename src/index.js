import dotenv from "dotenv";
import express from "express";  // Assuming you're using Express
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

// const app = express(); // Define the app instance
const PORT = (process.env.PORT || 8000);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("The connection failed:", err);
  });
