const { loginController, signUpController } = require('../controllers/authController');

const router = require('express').Router();

router.get('/login', loginController)
router.get('/signup', signUpController)
module.exports = router;