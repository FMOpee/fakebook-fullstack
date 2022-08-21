const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    uid: {type: String, reuired: true},
    fileName: {type: String, reuired: true}
},{timestamps:true}
);

const Story = mongoose.model("story", storySchema);

module.exports = Story;