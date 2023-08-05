// models/product.js

import mongoose from 'mongoose';
const categorySchema = require('./category');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type:String, required: true},
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
 
});

export const ProductModel = mongoose.model('Product', productSchema);

// module.exports = Product;
