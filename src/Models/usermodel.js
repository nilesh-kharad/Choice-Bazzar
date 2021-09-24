const mongoose = require('mongoose');
// const validator = require('validator');

const userdbstruct = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        
       
        // unique:true
    },
    password: {
        type: String,
    }
})

const user = mongoose.model('user', userdbstruct); //single collection created here and exported
module.exports = user;