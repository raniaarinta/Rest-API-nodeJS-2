const express= require('express');
const bike_router = express.Router();
const bike_model= require("../models/Bike_models");

bike_router.get('/',async (req,res)=>{

    try{
        const all_bike =await bike_model.find();
        res.json(all_bike);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
bike_router.get('/:id',async (req,res)=>{

    try{
        const bike_by_id =await bike_model.findById(req.params.id);
        res.json(bike_by_id);

    }
    catch(err)
    {
        res.json({message:err});
    }
});
bike_router.post('/', async (req,res)=>{
    const myBike= new bike_model({
        name:req.body.name,
        model:req.body.model,
        colour:req.body.colour,
        size:req.body.size,
        description:req.body.description,
        rent_price:req.body.rent_price,
        availability:req.body.availability

    })
    try{
        const savedbike= await myBike.save();
        res.json(savedbike);
    }
    catch(err)
    {
        res.json({message:err});

    }

});
bike_router.delete('/:id',async (req,res)=>{

    try{
        const remove_bike =await bike_model.deleteOne({ "_id" : ObjectId(req.params.id)});
        res.json(remove_bike);

    }
    catch(err)
    {
        res.json({message:err});
    }
});

module.exports=bike_router;