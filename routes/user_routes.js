const express= require('express');
const User_models = require('../models/User_models');
const user_router = express.Router();
const user_model = require("../models/User_models");

user_router.get('/',async (req,res)=>{

    try{
        const all_user =await user_model.find();
        res.json(all_user);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
user_router.get('/:id',async (req,res)=>{

    try{
        const user_by_id =await user_model.findById(req.params.id);
        res.json(user_by_id);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
user_router.post('/', async (req,res)=>{
    const myUser= new user_model({
        username: req.body.username,
        password:req.body.password, 
        fullname: req.body.fullname,
        phone_number: req.body.phone_number,
        email:req.body.email,
        user_status:req.body.user_status,

    })
    try{
        const savedUser= await myUser.save();
        res.json(savedUser);
    }
    catch(err)
    {
        res.json({message:err});

    }

});

user_router.delete('/:id',async (req,res)=>{

    try{
        const remove_user =await user_model.deleteOne({ "_id" : ObjectId(req.params.id)});
        res.json(remove_user);

    }
    catch(err)
    {
        res.json({message:err});
    }
});

module.exports=user_router;