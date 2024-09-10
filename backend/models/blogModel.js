const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    titre: {
        type: String,
        required: [true, 'Le titre est requis']
    },
    description: {
        type: String,
        required: [true, 'Le contenu est requis']
    },
    image: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: [true, 'L\'auteur est requis']
    },
    category: {
        type: String,
        default: 'Non catégorisé'
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);