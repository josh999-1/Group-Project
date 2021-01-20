const mongoose = require('mongoose');

const userScore = new mongoose.Schema({
    score: {
        type: String,
        required: true       
    },
    time: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    }  
},{timestamps: true});

module.exports = mongoose.model('userScore',userScore);