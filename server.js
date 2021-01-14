const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 
const auth = require('./middlewares/auth')
const axios = require('axios')

const app = express();
dotenv.config({path:'./.env'})

app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use(cors())

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB is connected"))

app.get('/', (req, res) => {
    res.send("hello from nodejs")
})

app.post('/register', async(req, res) => {
    console.log("reaching register on backend")
    console.log(req.body)
    let error = false

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
            message: "user was registered"
        })
    }
    else{
        res.json({
            message: "email alreay exists on system"
        })
    }
})

app.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.userEmail})
    const isMatch = await bcrypt.compare(req.body.userPassword,user.password)

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
            message: "user logged in"
        })
    }
    else{
        res.json({
            message: "incorrect login details"
        })
    }
})








app.listen( 5000, () => {
    console.log("Server running on port 5000")
})