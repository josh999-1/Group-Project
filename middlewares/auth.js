const { promisify } = require("util");
const jwt = require('jsonwebtoken');
const jwt1 = require('jsonwebtoken');
const User = require('../models/user');
const userScore = require('../models/userScore');

exports.isLoggedIn = async (req, res, next) => {
    console.log("Checking if user is logged in")

    if (req.cookies.jwt) {   
        const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
        console.log("My token decoded")
        console.log(decoded)

        req.userFound = await User.findById(decoded.id)
    }

    next()
}

exports.isScore = async(req, res, next) => {
    console.log("Checking the score")

    if (req.cookies.jwt1) {    
        const decoded = await promisify(jwt1.verify)(req.cookies.jwt1, process.env.JWT_SECRET1);
        console.log("My token decoded")
        console.log(decoded)

        req.scoreFound = await userScore.findById(decoded.id)
    }

    next()
}

exports.logout = (req, res, next) => {

    res.cookie('jwt','jwt1','logout', {
        expires: new Date( Date.now() + 2*1000),
        httpOnly: true
    });

    next()
}

exports.logoutScore = (req, res, next) => {

    res.cookie('jwt1','logoutScore', {
        expires: new Date( Date.now() + 2*1000),
        httpOnly: true
    });

    next()
}

