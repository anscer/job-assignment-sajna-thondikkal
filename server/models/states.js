const mongoose = require('mongoose');
const { type } = require('os');


const stateShema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    status:{
        required:true,
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    createdBy:{
        required:true,
        type:String
    }
})

const State = mongoose.model('State',stateShema);

module.exports = State;