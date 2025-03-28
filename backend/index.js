const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/",(req,res)=>{
    res.send("connected to e-commerce backend sucessfully");
})


mongoose.connect(MONGO_URI)
.then((check)=>{
    app.listen(PORT,()=>{
        console.log("Connected to server");
    })
}).catch((err)=>{
    console.log(err);
})


