const express = require('express');
require('dotenv').config()
require('db/mongoose')
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/api/track',(req,res)=>{
    res.json({message:"Track my habit"})
})

const PORT = process.env.PORT;
app.listen((PORT), () => {
    console.log(`Server running on ${PORT}`);
})