const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    name:{
        required:true,
        type:String,
    },
    watchlist:[
        {
        type:String,
        }
    ]
});
module.exports = mongoose.model('user',userSchema)