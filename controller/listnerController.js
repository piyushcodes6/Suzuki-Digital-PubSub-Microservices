const mongoose = require('mongoose');
const Redis = require('ioredis');
const redis = new Redis({ host: process.env.REDIS_HOST });
const processedDataSchema=require('../model/processedDataModel');

redis.subscribe('data_inserted', (err, count) => {
    if (err) {
      console.error('Failed to subscribe to Redis channel', err);
      process.exit(1);
    }
  
    console.log(`Subscribed to ${count} Redis channel(s).`);
  });


  redis.on('message', async (channel, message) => {
    if (channel === 'data_inserted') {
      const data = JSON.parse(message);
      const newProcessedData = new DataModel({
        ...data,
        modified_at: new Date()
      });
  
      await newProcessedData.save();
      console.log('Processed data saved to second collection:', newProcessedData);
    }
  });