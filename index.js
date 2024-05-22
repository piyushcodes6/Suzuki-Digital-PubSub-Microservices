const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Redis = require('ioredis');
const redis = new Redis({ host: process.env.REDIS_HOST });
const app = express();

//routes import
const receiverRoutes=require('./routes/receiverRoute');

app.use(bodyParser.json());
app.use('/receiver',receiverRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
    console.log('Receiver service running on port 3000');
  });
  