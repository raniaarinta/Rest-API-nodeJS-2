const mongoose= require('mongoose');
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }, 
    fullname:{
        type:String,
        required:true,
    },
    phone_number:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    user_status:{
        type:String,
        required:true,
    }

});
module.exports= mongoose.model('user',userSchema);