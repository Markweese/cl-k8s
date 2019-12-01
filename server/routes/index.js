const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Express route handlers
router.get('/', componentController.getComponents);

router.get('/components', componentController.getComponents);

router.get('/tags', componentController.getTags);

router.get('/types', componentController.getTypes);

router.post('/components', componentController.postComponents);

module.exports = router;
