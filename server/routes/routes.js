const express=require('express')
const router=express.Router()
const user=require('../Models/user')

//create user

router.post('/users',async(req,res)=>{
 try{
  const newuser= new user({
 name:req.body.name,
 role:req.body.role,
 image:req.body.image
  })
  console.log(newuser)
  const saveuser=await newuser.save()
  res.status(200).json({result:'user is added',saveuser})
 }
 catch(err){
   res.status(500).json(err)
   console.log(err)
 }
})

// get  users

router.get('/getusers',async(req,res)=>{
  try{
   const alldata = user.find();
   return res.json(await alldata)
  }
  catch(err){
    res.status(500).json(err)
    console.log(err)
  }
 })

 module.exports=router