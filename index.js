const express = require("express");
const mongoose = require("mongoose");
const connect = require("./db");
const User = require("./modal");
const Joi = ("joi");
const app = express();
app.use(express.json())


app.post("/create" , async(req , res) =>{
    const schema=joi.object({
        Name:joi.string().min(5).max(15).required(),
        email:joi.string().email().lowercase().required(),
        phone:joi.string().min(10).max(10).required()
    })
    let data = await schema.validate(req.body)
    let result = await User.create(result.value)
    res.json(data)
})

app.get("/alldata" , async(req ,res)=>{
    let data = await User.find()
    res.json(data)
})

app.delete("/delete/:id" , async(req , res) =>{
    let {id} = req.params.id;

    let data = await User.findByIdAndDelete(id)
    res.json(data)
})

app.put("/update/:id" , async(req ,res) =>{
    let {id} = res.params.id;

    let data = await User.findByIdAndUpdate(id , req.body)
    res.json(data)
})

app.get("/search",async(req,res)=>{
    let {search}=req.query;
    let data=await User.find({$or:[{Name:search},{email:search},{phone:search}]})
    res.send(data)
})

app.listen(9080 , () =>{
    connect()
    console.log("port is start 9080")
})