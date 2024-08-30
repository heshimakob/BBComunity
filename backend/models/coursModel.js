const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    description: {
        type: String,
        required: [true, 'Contenu du cours is required']
    },
    duration: {
        type: Number,
        required: [true, 'Contenu du cours is required']
    },
    category: {
        type: Number,
        required: [true, 'Contenu du cours is required']
    },
    image: {
        type: String,
        required: [true, 'Contenu du cours is required']
    },
    chapitres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapitre' }]
    
}, { timestamps: true }); // correction de 'timeStamps' à 'timestamps'

module.exports =mongoose.model('Cours',coursSchema)