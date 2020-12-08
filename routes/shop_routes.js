const express= require('express');
const shop_router = express.Router();
const shop_model = require("../models/Shop_models");
shop_router.get('/',async (req,res)=>{
    try{
        const all_shop =await shop_model.find();
        res.json(all_shop);

    }
    catch(err)
    {
        res.json({message:err});
    }

   
});
shop_router.get('/:id',async (req,res)=>{

    try{
        const shop_by_id =await shop_model.findById(req.params.id);
        res.json(shop_by_id);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
shop_router.post('/', async (req,res)=>{
    const myShop= new shop_model({
        shop_name:req.body.shop_name,
        owners_name:req.body.owners_name,
        adress:req.body.adress,
        shop_contact:req.body.shop_contact
    })
    try{
        const savedShop= await myShop.save();
        res.json(savedShop);
    }
    catch(err)
    {
        res.json({message:err});

    }

});
shop_router.delete('/:id',async (req,res)=>{

    try{
        const remove_shop =await shop_model.deleteOne({ "_id" : ObjectId(req.params.id)});
        res.json(remove_shop);

    }
    catch(err)
    {
        res.json({message:err});
    }
});

module.exports=shop_router;