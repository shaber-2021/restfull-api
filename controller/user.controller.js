const {v4 : uuidv4}=require('uuid')
const User = require('../model/schema')
require('../db/mydata')

const createdata = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user = new User ({id:uuidv4(),name,email,password})
         const data = await user.save()
           res.status(201).json({data})
           console.log(data)
    }catch(err){
        res.status(500).json({message:'this server is error'})
    }
}

const updateuser=async(req,res)=>{
    try{
        const user = await User.findOne({id : req.params.id})
            user.name = req.body.name;
            user.email=req.body.email;
            user.password=req.body.password;
            await user.save()
           res.status(200).json(user)
           console.log(data)
    }catch(err){
        res.status(500).json({message:'this server is error'})
    }
}

const getalluser=async(req,res)=>{
  try{
    const user = await User.find();
    res.status(200).json(user)
  }catch(err){
    res.status(500).json({message:err})
  }
}

const getoneuser = async(req,res)=>{
    try{
        const user = await User.findOne({id : req.params.id})
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:err})
    }
}


const deleteuser = async(req,res)=>{
    try{
         await User.deleteOne({id : req.params.id})
        res.status(200).json({message:'your user is deleted'})
    }catch(err){
        res.status(500).json({message:err})
    }
}

module.exports={createdata,getalluser,getoneuser,deleteuser,updateuser}