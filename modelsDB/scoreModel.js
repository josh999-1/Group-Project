const mongoose = require('mongoose');
const { stringify } = require('querystring');

const score = new mongoose.Schema({
    score: {
        type: String,
        required: true
        // required is a backend validation
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('score', score);