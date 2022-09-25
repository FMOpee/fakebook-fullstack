const mongoose = require("mongoose");

module.exports = () =>{
    try {
        // mongoose.connect("mongodb://db-status:27017/Fakebook");
        mongoose.connect("mongodb://localhost:27017/Fakebook");
        console.log("dbconn");
    } catch (error) {
        console.log(error);
    }
}
