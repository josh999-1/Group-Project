'use strict';
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user')
const userScore = require('./models/userScore')
const jwt = require('jsonwebtoken')
const jwt1 = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 
const auth = require('./middlewares/auth')
const axios = require('axios')
const cookieParser = require('cookie-parser')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const app = express();
dotenv.config({path:'./.env'})

function updateDatabase(data) {
     // update the database
    return newValue;
}

app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use(cors())
app.use(cookieParser())
app.use(bodyParser);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,  
    useUnifiedTopology: true
}).then(() => console.log("MongoDB is connected"))

app.get('/', (req, res) => {
    const newValue = updateDatabase(res.body);

    res.json(newValue)
})

app.post('/register', async(req, res) => {
    console.log("reaching register on backend")
    console.log(req.body)
    let error = false
    const newValue = updateDatabase(res.body);

    const UserDB = await User.find()
    for (let x=0; x<UserDB.length; x++){
        if (req.body.userEmail == UserDB[x].email){
            error = true
        }
    }
    if (error == false){
        const hashedPassword = await bcrypt.hash(req.body.userPassword, 8)
    
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail,
            password: hashedPassword,
        }) 
        const user = await User.findOne({email: req.body.userEmail})
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
        console.log(token)
        
        const cookieOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPRESS * 24 * 60 * 60 * 1000), httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions)  
        loggedIn = true
        res.json({
            message: "user was registered",
            newValue
        })
        
    }
    else{
        res.json({
            message: "email alreay exists on system",
            newValue
        })
    }
})

app.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.userEmail})
    const isMatch = await bcrypt.compare(req.body.userPassword,user.password)
    const newValue = updateDatabase(res.body);

    if (isMatch){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
        console.log(token)

        const cookieOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPRESS * 24 * 60 * 60 * 1000), httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions)
        loggedIn = true
        res.json({
            message: "user logged in",
            newValue
        })
    
    }
    else{
        res.json({
            message: "incorrect login details",
            newValue
        })
    }
})
     
app.post('/results', auth.isLoggedIn, async (req, res) => {
    console.log("reached backend")
    console.log(req.body)
    const scoreArr = req.body.score
    const time = req.body.time
    let score = 0
    const newValue = updateDatabase(res.body);

    for (let x=0; x < scoreArr.length; x++) {
        if (scoreArr[x] == "correct"){
            score = score + 1
        }
        
    }
    const justNow = await userScore.create({
        score: score,
        time: time,
        userid: req.userFound._id
    })
    console.log("here", justNow._id)

    const sco = await userScore.findById({_id: justNow._id})
    const token = jwt1.sign({id: sco._id}, process.env.JWT_SECRET1, {
        expiresIn: process.env.JWT_EXPIRES_IN1
    })
    console.log(token)

    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPRESS1 * 24 * 60 * 60 * 1000), httpOnly: true
    }
    res.cookie('jwt1', token, cookieOptions)  

    res.json({
        message: "this is from backend",
        newValue

    })
})

app.get('/table', auth.isScore, async (req, res) => {
    const leaderBoard = await userScore.find().populate('userid', 'name')
    console.log(leaderBoard)

    const curScore = await userScore.findById({_id: req.scoreFound._id}).populate('userid', 'name')
    console.log(curScore)

    const newValue = updateDatabase(res.body);

    res.json({
        leaderBoard,
        curScore,
        newValue
    })
})

app.get('/tryAgain', auth.logoutScore, (req, res) => {
    const newValue = updateDatabase(res.body);
    res.json({
        message: "score logged out",
        newValue
    })
})

app.listen( 5000, () => {
    console.log("Server running on port 5000")
})

module.exports = app;
module.exports.handler = serverless(app);