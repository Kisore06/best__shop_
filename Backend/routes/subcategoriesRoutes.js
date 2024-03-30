// routes/subcategoriesRoutes.js
const express = require('express');
const router = express.Router();
const subcategoriesController = require('../Controllers/subcategoriesController');

router.get('/', subcategoriesController.getSubcategories);
router.post('/', subcategoriesController.addSubcategory);

module.exports = router;
