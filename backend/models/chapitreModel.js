const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  lien: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cours' }
},{ timestamps: true });

module.exports = mongoose.model('Chapitres', chapterSchema);



// const mongoose = require('mongoose');

// const chapitreSchema = mongoose.Schema({
//     titre: {
//         type: String,
//         required: [true, 'name is required']
//     },
//     description: {
//         type: String,
//         required: [true, 'Contenu du cours is required']
//     },
//     image: {
//         type: String,
//         required: [true, 'Contenu du cours is required']
//     },
//     chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapitre' }]
// }, { timestamps: true }); // correction de 'timeStamps' à 'timestamps'

// module.exports =mongoose.model('Chapitres',chapitreSchema)