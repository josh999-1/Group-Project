const mongoose = require('mongoose');
const { stringify } = require('querystring');

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
        required: false,
        ref:'user'

    }
    
}, {
    timestamps: true
}
);

module.exports = mongoose.model('userScore', userScore);