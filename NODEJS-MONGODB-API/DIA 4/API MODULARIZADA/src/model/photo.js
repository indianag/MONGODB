const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  userName: String,
  photoUrl: String,
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;



















































// const { Schema, model } = require("mongoose");

// const UserSchema = new Schema(
//     {
//         name: String,
//         email: String,
//         role: String,
//         verified: Boolean
//     }
// )

// module.exports = model("User", UserSchema, "user");
