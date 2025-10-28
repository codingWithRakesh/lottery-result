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



export { app }