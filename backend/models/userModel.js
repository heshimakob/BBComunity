const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  genre: {
    type: String,
    enum: ['Masculin', 'Féminin'],
    default: 'Masculin', // Définir "Masculin" comme valeur par défaut
    required: [false, 'genre n\'est pas obligatoire']
  },
  image: {
    type: String,
    required: [false, 'image n\'est pas obligatoire']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  role: {
    type: String,
    enum: [
      'Software Development',
      'Network',
      'Machine Learning',
      'Entreprenariat',
      'Art numérique et AR, VR et Design'
    ],
    default: 'user'
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  subscription: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cours"
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);