const express = require('express');
const router = express.Router();
const offerProduct = require('../Controllers/offerProduct');
const image_uploader_middleware = require('../Middleware/imageUpload');

// Route to fetch all offer products
router.get('/', offerProduct.getOfferProducts);
router.post('/', image_uploader_middleware, offerProduct.addOfferProduct);


// Route to update an offer product
// router.put('/offer-products/:product_id', offerProductsController.updateOfferProduct);

// // Route to delete an offer product
// router.delete('/offer-products/:product_id', offerProductsController.deleteOfferProduct);

module.exports = router;
