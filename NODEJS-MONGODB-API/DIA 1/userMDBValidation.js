const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const credentialsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    validate: {
      validator: function (date) {
        return !isNaN(date);
      },
      message: 'Invalid date of birth',
    },
  },
  comments: String,
  role: {
    type: String,
    enum: ['Administrador', 'User', 'Programador'],
    default: 'User',
  },
});

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    validate: [
        function(password)
        {
            return password.length >= 8;
        },
        'El password deberia ser mas largo'],
        select: false
  },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
});

// Middleware para encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  // Lógica para encriptar la contraseña, por ejemplo, utilizando bcrypt
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const CredentialsV = mongoose.model('CredentialsV', credentialsSchema, 'credencials');
const ProfileV = mongoose.model('ProfileV', profileSchema, 'profile');
const UserV = mongoose.model('UserV', userSchema, 'user');

module.exports = { CredentialsV, ProfileV, UserV };