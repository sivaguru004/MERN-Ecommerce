import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db_uri  = process.env.DB_URI;

export const db_connection = ()=>{
    mongoose.connect(db_uri).then((data)=>{
        console.log("DataBase Connected Successfully");
    }).catch((err)=>{
        console.log(err.message);
    })
}
