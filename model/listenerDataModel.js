const mongoose=require('mongoose');
const DataSchema = new mongoose.Schema({
    id:{
        type: 'string',
        required: true
    },
    user: {
        type: 'string',
        required: true
    },
    class: {
        type: 'string',
        required: true
    },
    age: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    inserted_at: {
        type: 'Date',
        required: true
    },
    modified_at: {
        type: 'Date',
        required: true
    }
  });

  module.exports=mongoose.model('Listener', DataSchema);

