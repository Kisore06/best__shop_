const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryControllers'); // Corrected path

// Corrected function names
router.get('/', categoryController.getCategories);
router.post('/', categoryController.addCategory);

module.exports = router;
