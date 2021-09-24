const mongoose = require('mongoose');
// const validator = require('validator');

const categories = new mongoose.Schema({
    Categoryname: {
        type: String,
        required: true,
    },
})

const categories = mongoose.model('user', categories); //single collection created here and exported
module.exports = categories;