const mongoose =require('mongoose');
const myschema = new mongoose.Schema({
    id : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    todyDate : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('users', myschema);

