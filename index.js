require('dotenv').config();
const express = require('express');
const app =  express();
const port = process.env.PORT;

const route = require('./routes/client/index.route');

app.set('views','./views');
app.set('view engine', 'pug');
 
// Routes
route(app);

app.listen(port, ()=>{
    console.log("Sucess!")
})