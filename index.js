const express = require('express');
const app = express();

const dbconnect = require('./config/database')
dbconnect();
app.listen(4000,()=>{
    console.log('Server is Live on Port 4000');
})