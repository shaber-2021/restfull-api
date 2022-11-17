const express = require('express');
const cors = require('cors');
const route = require('./route/user.route')
const app = express();

app.use('/api/users',route)
app.use(cors())


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/./views/index.html')
 })
 
app.use((req,res,next)=>{
    res.status(404).send({message:'route not found shaber'})
})

app.use((err,req,res,next)=>{
    res.status(500).send({message:'something broke'})
})

module.exports=app