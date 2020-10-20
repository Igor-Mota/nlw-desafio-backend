import express from "express"
import routes from "./routes"
import path from "path"
import  dotenv from  "dotenv";
import cors from "cors"
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use("/uploads", express.static(path.join(__dirname,"..", "uploads")));

app.listen(process.env.APP_PORT, () =>{
    return console.log("valendo")
})