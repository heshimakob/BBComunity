// const mongoose = require('mongoose');

// const progressSchema = mongoose.Schema({
//     course: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Cours"
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },
//     completedLecture: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Chapitre"
//     }]
// }, { timestamps: true });

// module.exports = mongoose.model('Progress', progressSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
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
});

module.exports = mongoose.model('Progress', progressSchema);