const express = require('express');
const route = express.Router();
// const services = require('../render')
const ProductController = require('../controller/ProductController');


//----------------------------Categories Route-----------//
route.get('/', ProductController.categories);
