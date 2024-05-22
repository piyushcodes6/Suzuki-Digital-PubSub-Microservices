const mongoose=require('mongoose');
const dataSchema=require('../model/receiverDataModel');
const { v4: uuidv4 } = require('uuid');
const Redis = require('ioredis');
const redis = new Redis({ host: process.env.REDIS_HOST });


const receiverService=async(req,res)=>{
    const { user, class: className, age, email } = req.body;

    if (!user || !className || !age || !email) {
      return res.status(400).send('Invalid data');
    }
  
    const newData = new dataSchema({
      id: uuidv4(),
      user,
      class: className,
      age,
      email,
      inserted_at: new Date()
    });
  
    await newData.save();
  
    // Publish event to Redis
    redis.publish('data_inserted', JSON.stringify(newData));
  
    res.status(201).send(newData);
};

module.exports={receiverService};