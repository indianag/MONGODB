const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  userName: String,
  photoUrl: String,
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

























// const mongoose = require('mongoose');

// const PhotosSchema = new mongoose.Schema({
//     user:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     photoUrl: String,
//     title: String,
//     description: String
// })

// module.exports = mongoose.model("Photos", PhotosSchema, "photos");