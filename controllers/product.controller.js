import Product from '../models/product.js';

export const addProduct = async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    return res.status(200).json({ data: productData });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const productData = await Product.find({});
    return res.status(200).json({ data: productData });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = await Product.findById(id);
    return res.status(200).json({ data: productData });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the product exists
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }

    // Update the product
    const updateProductData = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateProductData) {
      return res.status(400).json({ msg: 'Product Not Updated' });
    }

    // Return the updated product data
    return res.status(200).json({ data: updateProductData });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productExists = await Product.findById(id);
    if (!productExists) {
      return res.status(404).json({ msg: 'Product Not Found' });
    }
    const deletedProduct = await Product.findByIdAndDelete(id);
    return res.status(200).json({ data: 'Product Deleted Successfully' });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};
