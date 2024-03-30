// routes/gendersRoutes.js
const express = require('express');
const router = express.Router();
const gendersController = require('../Controllers/gendersController');

router.get('/', gendersController.getGenders);
router.post('/', gendersController.addGender);

module.exports = router;
