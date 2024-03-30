// routes/brandsRoutes.js
const express = require('express');
const router = express.Router();
const brandsController = require('../Controllers/brandsController');

router.get('/', brandsController.getBrands);
router.post('/', brandsController.addBrand);
// router.get('/brands/:categoryName', brandsController.getBrandsByCategory);


module.exports = router;
