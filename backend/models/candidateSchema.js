const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'Contenu du cours is required']
    },
    domaine: {
        type: String,
        required: [true, 'le pays est requis']
    },
    genre: {
        type: String,
        required: [true, 'le pays est requis']
    },
    phoneNumber: {
        type: String,
        required: [true, 'le numero de telephone requis']
    },
    password: {
        type: String,
        required: [true, 'le numero de telephone requis']
    },
    status: {
        type: String,
        enum: ['Pending', 'Submitted'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema);
