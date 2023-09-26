/* eslint-disable no-undef */
const { Router } = require('express')
const { registerUser } = require('../controllers/user')

const router = Router();

router.post('/signup', registerUser);

module.exports = router;