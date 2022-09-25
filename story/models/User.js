const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName   : {type: String, reuired: true},
    lastName    : {type: String, reuired: true},
    email       : {type: String, reuired: true},
    password    : {type: String, reuired: true},
    profilePicture: {type:String, default:""},
    coverPicture: {type:String, default:""},
    followers   : {type:Array,default:[]},
    following   : {type:Array,default:[]},
    isAdmin     : {type:Boolean, default:false}
},{timestamps:true}
);

// userSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({fullName: this.firstName + " " + this.lastName}, process.env.JWT_PVT_KEY, {expiresIn: "7d"});
//     return token;
// }

const User = mongoose.model("User", userSchema);


module.exports = User;