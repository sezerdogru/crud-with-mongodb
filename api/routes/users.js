const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/users');

router.post('/', userController.create);
router.post('/login', userController.authenticate);

module.exports = router;