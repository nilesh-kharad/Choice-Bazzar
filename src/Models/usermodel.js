const mongoose = require('mongoose');
// const validator = require('validator');

const userdbstruct = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:10
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true,
        min:10,
        max: 10,
        unique:true
    },
    password: {
        type: String,
    }
})

const user = mongoose.model('user', userdbstruct); //single collection created here and exported
module.exports = user;