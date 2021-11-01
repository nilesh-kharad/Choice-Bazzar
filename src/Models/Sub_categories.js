const mongoose = require('mongoose');
//-------------------Schema for sub-categories-------------//
const subcategories = new mongoose.Schema({
    sub_categoryname: {
        type: String,
        unique:true
    },
    Categoryname:{
          type: String,
        unique:true
    }
})

const sub_categories = mongoose.model('sub_categories', subcategories); //single collection created here and exported
module.exports = sub_categories;