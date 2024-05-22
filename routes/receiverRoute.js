const express=require('express');
const {receiverService}=require('../controller/recieverController');
const bodyParser = require('body-parser');
const app=express();
app.post("/",receiverService);
module.exports=app;
