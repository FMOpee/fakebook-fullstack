const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const minio = require("minio");
require("dotenv").config();

const dbConnect = require("./dbconnect");
const minioConnect = require("./minoConnect");
const storyController = require("./controller/storyController");

dbConnect();
const app = express();

//checking minio
console.log("connected minio object storage at: http://" + minioConnect.host + ":" + minioConnect.port);


//middleware
app.use(bodyparser.json());
app.use(cors({
    origin: "*",
    preflightContinue :false
}));
// app.use("/userRegistration", userRegistration);
// app.use("/login",login);
// app.use("/userControl",userControl);

// console.log("iwanna die")
app.use("/story", storyController);
// app.use("/story",storyController);




app.listen(4060, ()=>{
    console.log("lol");
});
