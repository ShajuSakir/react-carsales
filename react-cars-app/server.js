//create simple express server
const express = require('express');
//path to install

const path = require('path');

//to crerate express application, initialise this app

const app = express();
const PORT = 3000;

//serving static assets
app.use(express.static(path.join(__dirname, 'build')));

//handle every single request that come sthrough /

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'))
});

app.listen(PORT);

console.log('React server is running on PORT : ', PORT);

