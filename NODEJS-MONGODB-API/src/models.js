const mongoose = require('mongoose');


const credentialsSchema = new mongoose.Schema({
  address: String,
  phone: String,
  email: String,
});

const profileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: String,
  comments: String,
  role: String,
});

const userSchema = new mongoose.Schema({
  login: String,
  password: String,
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
});

const Credentials = mongoose.model('Credentials', credentialsSchema, 'credentials');
const Profile = mongoose.model('Profile', profileSchema, "profile");
const User = mongoose.model('User', userSchema, 'user');

module.exports = { Credentials, Profile, User };