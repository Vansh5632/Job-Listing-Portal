import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectdb from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";


dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOptions = {
    origin:"https//localhost:5173",
    credentials:true,
}

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    connectdb();
    console.log(`server is running on ${PORT}`);
})