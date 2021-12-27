const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/sign-up', authController.sign_up)

router.post('/log-in', authController.sign_in)

module.exports = router
