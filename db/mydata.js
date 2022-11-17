const mongoose = require('mongoose');
require('dotenv').config({ path: './.env'});

const db = process.env.MYDATA

mongoose.connect(db)
.then(()=>{console.log('your connection is successful with mongodb')})
.catch((err)=>{console.log(`your conncetion is ${err}`)})