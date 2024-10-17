const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');


const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use('/api', indexRouter)

const mongoURI = `mongodb://localhost:27017/todo-demo`

mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(()=>{
        console.log("mongoose connected");
        
    })
    .catch((err)=>{
        console.log("db is not working");
        
    })
    
app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/about', function (req, res) {
    res.send('this is allabout express')
})

app.listen(5000, ()=>{
    console.log("server is on 5000");
    
})