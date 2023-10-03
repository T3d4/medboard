/* eslint-disable no-undef */
const { Router } = require('express')
const { registerUser, loginUser } = require('../controllers/user')

const router = Router();

router.post('/signup', registerUser);
router.post('/login', loginUser)

module.exports = router;