const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const minio = require("minio");
require("dotenv").config();

const dbConnect = require("./dbconnect");
const userRegistration = require("./controller/UserRegistration");
const login =require("./controller/Login");
const userControl = require("./controller/UserControls");
const postControl = require("./controller/PostController");

dbConnect();
const app = express();

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use("/userRegistration", userRegistration);
app.use("/login",login);
app.use("/userControl",userControl);
app.use("/post", postControl);




app.listen(4000, ()=>{
    console.log("lol");
});
