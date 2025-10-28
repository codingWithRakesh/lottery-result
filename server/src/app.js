import express from "express"
import cors from "cors"
import helmet from "helmet";
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
}))
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())


app.get("/", (req, res) => {
    res.json({ message: "working" })
})

//routes imports
import resultRouter from "./routes/result.routes.js"
import commonRouter from "./routes/common.routes.js"


//routes declaration
app.use("/api/v1/result",resultRouter)
app.use("/api/v1/common",commonRouter)
export { app }