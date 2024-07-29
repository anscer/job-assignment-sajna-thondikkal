const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    user_role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
    },
    phone:{
        required:true,
        type:Number
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;