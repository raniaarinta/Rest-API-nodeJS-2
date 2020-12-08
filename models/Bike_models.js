const mongoose = require('mongoose');
const bicycleSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    colour:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rent_price:{
        type:Number,
        required:true,
    },
    availability:{
        type:Number,
        required:true,
    }

});
module.exports= mongoose.model('bicycle',bicycleSchema);