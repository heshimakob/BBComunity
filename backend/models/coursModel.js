const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    contenu: {
        type: String,
        required: [true, 'Contenu du cours is required']
    },
    link: {
        type: String,
        required: [true, 'le lien du cours est requis'] // correction de 'liens' à 'lien'
    }
}, { timestamps: true }); // correction de 'timeStamps' à 'timestamps'

module.exports =mongoose.model('Cours',coursSchema)