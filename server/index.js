import dotenv from "dotenv"
dotenv.config()
console.log("✅ Loaded from .env:", process.env.CORS_ORIGIN);

import connectDB from './src/config/db/db.js';
import { app } from "./src/app.js"

const PORT = process.env.PORT || 8000

connectDB().then(() => {
    app.on("error", (err)=>{
        console.log(err)
    })
    app.listen(PORT,()=>{
        console.log("server running",PORT)
    })
}).catch((err) => {
    console.log("connection failed", err?.message)
})