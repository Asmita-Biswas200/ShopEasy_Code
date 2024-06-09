import mongoose from "mongoose";
// const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productName : {
        type : 'String',
        required : [true, 'Please enter the product name']
    },
    price : {
        type : 'Number',
        required : [true, 'Please enter the product amount']
    },
    qty : {
        type : 'Number',
        required : true,
        default : 0
    },image : {
        type : 'String',
        required : false
    }
},{ timestamps : true});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
// module.exports = Product