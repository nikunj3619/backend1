const express = require('express');
const app = express();
const totalModel = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send("hello World");
})

app.post('/home', (req, res)=>{
    const totalCreated = totalModel.create({
        number : req.body.count,
    })
    
    res.send("Thanks For your participation");
})


app.listen(3000)
