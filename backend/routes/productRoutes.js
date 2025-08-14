


import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
    deleteProductByName,
    updateProductByName

} from '../controllers/productController.js';

const router = express.Router();



router.post('/add', createProduct); // ✅ ye line zaroor honi chahiye
router.get('/', getAllProducts); // for shop page
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
// Route
router.delete('/deleteByName/:name', deleteProductByName);
router.put('/updateByName/:name', updateProductByName);

export default router;
