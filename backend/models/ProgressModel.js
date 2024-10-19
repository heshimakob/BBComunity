const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cours: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cours',
    required: true
  },
  chapitres: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapitre'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
