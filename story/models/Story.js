const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    userID      : {type: String, required: true},
    image       : {type: String, required: true},
    likes       : {type: Number, default : 0}
},{timestamps:true}
);

const Story = mongoose.model("story", storySchema);

module.exports = Story;