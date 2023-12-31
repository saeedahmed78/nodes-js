// routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


// Commented authentication beacuse of bycrypt issue

// router.get('/products', authMiddleware.isAuthenticated, productController.getAllProducts);
// router.post('/products', authMiddleware.isAuthenticated, productController.createProduct);
// router.put('/products/:id', authMiddleware.isAuthenticated, productController.updateProduct);
// router.delete('/products/:id', authMiddleware.isAuthenticated, productController.deleteProduct);


router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);


module.exports = router;
