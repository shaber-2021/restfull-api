const express = require('express');
const { createdata,
         getalluser,
         getoneuser, 
         deleteuser,
         updateuser} = require('../controller/user.controller');
const route = express.Router();




route.use(express.json())
route.use(express.urlencoded({extended:true}))

route.get('/',getalluser)
route.get('/:id',getoneuser)
route.post('/',createdata)
route.patch('/:id',updateuser)
route.delete('/:id',deleteuser)


module.exports=route