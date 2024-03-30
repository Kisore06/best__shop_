// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/productsController');

router.get('/', productsController.getProducts);
router.post('/', productsController.addProduct);

module.exports = router;
