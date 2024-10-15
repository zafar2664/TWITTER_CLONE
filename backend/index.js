import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
//const PORT = 8080; iske badle env file bnaayi hai
// .env ki path define karni hai index me
dotenv.config({
    path:".env"
})
databaseConnection();

const app = express();


app.listen(process.env.PORT, ()=> {
    console.log(`Server listen at port ${process.env.PORT}`);
})