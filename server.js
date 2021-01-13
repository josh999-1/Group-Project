const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

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

app.post('/register', (req, res) => {
    console.log("reaching register on backend")
    console.log(req.body)


    res.json({
        message: "user was registered"
    })
    
})

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            {
                name: "John",
                city: "Manchester"
            },
            {
                name: "Peter",
                city: "Liverpool"
            }
        ]
    })
})

app.listen( 5000, () => {
    console.log("Server running on port 5000")
})