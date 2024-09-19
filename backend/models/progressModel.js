const mongoose = require('mongoose');

const progressSchema = mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cours"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    completedLecture: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapitre"
    }]
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);