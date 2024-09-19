const mongoose = require('mongoose');

const chapitreSchema = mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  lien: { type: String, required: true },
  video:{
    type: String,
    required:false
  },

  cours: { type: mongoose.Schema.Types.ObjectId, ref: 'Cours',
    required:true,
   },
  completed: { type: Boolean, default: false }
},{ timestamps: true });

module.exports = mongoose.model('Chapitre', chapitreSchema);
