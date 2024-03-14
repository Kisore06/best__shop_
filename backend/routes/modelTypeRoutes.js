// modelTypeRoutes.js
const express = require('express');
const router = express.Router();
const modelTypeController = require('../Controllers/modelTypeControllers');

router.get('/add-model-type', modelTypeController.showForm);
router.post('/add-model-type', modelTypeController.addModelType);

module.exports = router;
