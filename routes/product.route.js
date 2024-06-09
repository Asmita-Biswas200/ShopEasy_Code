import express from 'express';
import {
  deleteProduct,
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/product.controller.js';

const productRoutes = express.Router();

//Post Req
productRoutes.post('/', addProduct);

//Get Products
productRoutes.get('/', getAllProducts);

//Get Product By id
productRoutes.get('/:id', getProductById);

//Update Product By id
productRoutes.put('/:id', updateProduct);

//Delete the product by Id
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;
