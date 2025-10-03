import mongoose from "mongoose";

import {DB_NAME} from "./constants.js";















































































































































/* This is the main entry point of the application. It connects to the MongoDB database using Mongoose and starts an Express server on the specified port. The database name is imported from the constants file.

import express from "express";

const app=express()


(async ()=>{
    try {
        await    mongoose.connect("${process.env.MONGODB_URL}/${DB_NAME}")
        app.on("error", (err)=>{console.log("err", err);

            throw err
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`server is running on port ${process.env.PORT}`)


        })
    }

    catch(err){
        console.log("err", Error)
        throw err
    }
})()
    */