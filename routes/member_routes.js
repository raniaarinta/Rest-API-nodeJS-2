const express= require('express');
const member_router = express.Router();
const member_model = require('../models/Member_models');

member_router.get('/',async (req,res)=>{

    try{
        const all_members =await member_model.find();
        res.json(all_members);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
member_router.get('/:id',async (req,res)=>{

    try{
        const member_by_id =await member_model.findById(req.params.id);
        res.json(member_by_id);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
member_router.post('/', async (req,res)=>{
    const myMember= new member_model({
        username:req.body.username,
        password:req.body.password,
        fullname:req.body.fullname,
        email:req.body.email,
        membership_status:req.body.membership_status
    

    })
    try{
        const savedmember= await myMember.save();
        res.json(savedmember);
    }
    catch(err)
    {
        res.json({message:err});

    }

});
member_router.delete('/:id',async (req,res)=>{

    try{
        const remove_member =await member_model.deleteOne({ "_id" : ObjectId(req.params.id)});
        res.json(remove_member);

    }
    catch(err)
    {
        res.json({message:err});
    }
});


module.exports=member_router;