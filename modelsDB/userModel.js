const mongoose = require('mongoose');
const { stringify } = require('querystring');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
        // required is a backend validation
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('user', user);