const mongoose = require('mongoose');
const shopSchema = mongoose.Schema({
    shop_name:{
        type:String,
        required:true
    },
    owners_name:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    shop_contact:{
        type:String,
        required:true
    }

});
module.exports= mongoose.model('shop',shopSchema);