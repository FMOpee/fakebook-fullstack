const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const minio = require("minio");
require("dotenv").config();

const dbConnect = require("./dbconnect");
// const minioConnect = require("./minoConnect");
// const userRegistration = require("./controller/UserRegistration");
// const login =require("./controller/Login");
// const userControl = require("./controller/UserControls");
const postControl = require("./controller/PostController");
// const storyController = require("./controller/storyController");

dbConnect();
const app = express();

//checking minio
// console.log("connected minio object storage at: http://" + minioConnect.host + ":" + minioConnect.port);


//middleware
app.use(bodyparser.json());
app.use(cors({
    origin: "*",
    preflightContinue :false
}));
// app.use("/userRegistration", userRegistration);
// app.use("/login",login);
// app.use("/userControl",userControl);
app.use("/post", postControl);
// app.use("/story",storyController);




app.listen(4020, ()=>{
    console.log("lol");
});
