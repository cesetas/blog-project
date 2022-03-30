const mongoose = require("mongoose");
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: String,
    bio: String,
    photo: String,
    posts: String
})

module.exports = mongoose.model("Author", authorSchema)