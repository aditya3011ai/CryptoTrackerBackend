const express = require('express');
const dbconnect = require('./dbconnect');
const requireUser = require('./middleware/requireUser');

const app = express();
dbconnect();
app.use(express.json());


app.listen(4000,()=>{
    console.log("listening on port 4000");
})